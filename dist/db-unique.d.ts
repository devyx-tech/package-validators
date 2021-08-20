import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { EntitySchema, FindConditions, ObjectType } from 'typeorm';
interface UniqueValidationArguments<E> extends ValidationArguments {
    constraints: [
        ObjectType<E> | EntitySchema<E> | string,
        ((validationArguments: ValidationArguments) => FindConditions<E>) | keyof E
    ];
}
export declare class DbUnique implements ValidatorConstraintInterface {
    validate<E>(value: string, args: UniqueValidationArguments<E>): Promise<boolean>;
    defaultMessage(): string;
}
export {};
//# sourceMappingURL=db-unique.d.ts.map