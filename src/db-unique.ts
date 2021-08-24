import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import {
  Connection,
  EntitySchema,
  FindConditions,
  ObjectType,
} from 'typeorm';
import { Injectable } from '@nestjs/common';

interface UniqueValidationArguments<E> extends ValidationArguments {
  constraints: [
        ObjectType<E> | EntitySchema<E> | string,
        ((validationArguments: ValidationArguments) => FindConditions<E>) | keyof E,
  ];
}

@ValidatorConstraint({ name: 'unique', async: true })
@Injectable()
export class DbUnique implements ValidatorConstraintInterface {
  constructor(protected readonly connection: Connection) {}
  public async validate<E>(value: string, args: UniqueValidationArguments<E>) {
    const [EntityClass, findCondition = args.property] = args.constraints;
    return (
        (await this.connection.getRepository(EntityClass).count({
          where:
              typeof findCondition === 'function'
                  ? findCondition(args)
                  : {
                    [findCondition || args.property]: value,
                  },
        })) <= 0
    );
  }

  public defaultMessage() {
    return 'The $property has already been taken.';
  }
}
