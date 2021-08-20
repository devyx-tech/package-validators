import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { EntitySchema, FindConditions, ObjectType } from 'typeorm';
interface IsActiveArguments<E> extends ValidationArguments {
    constraints: [
        ObjectType<E> | EntitySchema<E> | string,
        ((validationArguments: ValidationArguments) => FindConditions<E>) | keyof E
    ];
}
export declare class IsActive implements ValidatorConstraintInterface {
    validate<E>(value: string, args: IsActiveArguments<E>): Promise<any>;
    defaultMessage(): string;
}
export {};
//# sourceMappingURL=is-active.d.ts.map