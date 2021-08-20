import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';

@ValidatorConstraint({ name: 'IsDocument', async: false })
export class IsDocument implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments) {
        return cpf.isValid(text);
    }

    defaultMessage(args: ValidationArguments): string {
        return '$property is invalid!';
    }
}
