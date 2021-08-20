import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { FindConditions } from 'typeorm';
interface IsGreaterThanValidationArguments<E> extends ValidationArguments {
    constraints: [
        string,
        ((validationArguments: ValidationArguments) => FindConditions<E>) | keyof E
    ];
}
export declare class IsGreaterThan implements ValidatorConstraintInterface {
    validate<E>(value: string, args: IsGreaterThanValidationArguments<E>): Promise<boolean>;
    defaultMessage<E>(args: IsGreaterThanValidationArguments<E>): string;
}
export {};
//# sourceMappingURL=is-greater-than.d.ts.map