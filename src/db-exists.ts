import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import {
  EntitySchema,
  FindConditions,
  getRepository,
  ObjectType,
} from 'typeorm';

interface DbExistsArguments<E> extends ValidationArguments {
  constraints: [
    ObjectType<E> | EntitySchema<E> | string,
    ((validationArguments: ValidationArguments) => FindConditions<E>) | keyof E,
  ];
}

@ValidatorConstraint({ name: 'exists', async: true })
export class DbExists implements ValidatorConstraintInterface {
  public async validate<E>(value: string, args: DbExistsArguments<E>) {
    const [EntityClass, findCondition = args.property] = args.constraints;
    return (
      (await getRepository(EntityClass).count({
        where:
          typeof findCondition === 'function'
            ? findCondition(args)
            : {
                [findCondition || args.property]: value,
              },
      })) > 0
    );
  }

  public defaultMessage() {
    return '$property does not exist!';
  }
}
