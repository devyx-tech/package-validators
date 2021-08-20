import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsDocument implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
//# sourceMappingURL=is-document.d.ts.map