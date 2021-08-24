import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { getManager } from 'typeorm';

@ValidatorConstraint({ async: true })
export class isUniqueValidator implements ValidatorConstraintInterface {
  validate(columnNameValue: any, args: ValidationArguments) {
    const params = args.constraints[0];
    return getManager()
      .query(
        `SELECT * FROM ${params.table} WHERE ${params.column} = '${columnNameValue}'`,
      )
      .then((res) => {
        if (res[0]) return false;
        return true;
      });
  }

  public defaultMessage() {
    return 'The $property has already been taken.';
  }
}

export function IsUnique(params: any, validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [params],
      validator: isUniqueValidator,
    });
  };
}
