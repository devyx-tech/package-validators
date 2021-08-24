import { ValidatorConstraintInterface, ValidationArguments, ValidationOptions } from 'class-validator';
export declare class isUniqueValidator implements ValidatorConstraintInterface {
    validate(columnNameValue: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(): string;
}
export declare function IsUnique(params: any, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=is-unique-v2.d.ts.map