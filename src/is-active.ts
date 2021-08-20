import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { EntitySchema, FindConditions, getRepository, ObjectType } from 'typeorm';

interface IsActiveArguments<E> extends ValidationArguments {
  constraints: [
    ObjectType<E> | EntitySchema<E> | string,
    ((validationArguments: ValidationArguments) => FindConditions<E>) | keyof E,
  ];
}

@ValidatorConstraint({ name: 'active', async: true })
export class IsActive implements ValidatorConstraintInterface {
  public async validate<E>(value: string, args: IsActiveArguments<E>) {
    const [EntityClass, findCondition = args.property] = args.constraints;
    const entity: any = await getRepository(EntityClass).findOneOrFail({
      where:
        typeof findCondition === 'function'
          ? findCondition(args)
          : {
              [findCondition || args.property]: value,
            },
    });

    if (entity.hasOwnProperty('is_active')) {
      return entity['is_active'];
    }

    return true;
  }

  public defaultMessage() {
    return '$property must be active!';
  }
}
