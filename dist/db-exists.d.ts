import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { EntitySchema, FindConditions, ObjectType } from 'typeorm';
interface DbExistsArguments<E> extends ValidationArguments {
    constraints: [
        ObjectType<E> | EntitySchema<E> | string,
        ((validationArguments: ValidationArguments) => FindConditions<E>) | keyof E
    ];
}
export declare class DbExists implements ValidatorConstraintInterface {
    validate<E>(value: string, args: DbExistsArguments<E>): Promise<boolean>;
    defaultMessage(): string;
}
export {};
//# sourceMappingURL=db-exists.d.ts.map