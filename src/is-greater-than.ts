import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { FindConditions } from 'typeorm';

interface IsGreaterThanValidationArguments<E> extends ValidationArguments {
  constraints: [
    string,
    ((validationArguments: ValidationArguments) => FindConditions<E>) | keyof E,
  ];
}

@ValidatorConstraint({ name: 'IsGreaterThan', async: true })
export class IsGreaterThan implements ValidatorConstraintInterface {
  public async validate<E>(
    value: string,
    args: IsGreaterThanValidationArguments<E>,
  ) {
    const [pattern = args.property] = args.constraints;
    return value > (<any>args.object)[pattern];
  }

  public defaultMessage<E>(args: IsGreaterThanValidationArguments<E>) {
    const [pattern = args.property] = args.constraints;
    return `The $property must be greater than ${pattern}!`;
  }
}
