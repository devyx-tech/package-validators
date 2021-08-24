"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUnique = exports.isUniqueValidator = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let isUniqueValidator = class isUniqueValidator {
    validate(columnNameValue, args) {
        const params = args.constraints[0];
        return typeorm_1.getManager()
            .query(`SELECT * FROM ${params.table} WHERE ${params.column} = '${columnNameValue}'`)
            .then((res) => {
            if (res[0])
                return false;
            return true;
        });
    }
    defaultMessage() {
        return 'The $property has already been taken.';
    }
};
isUniqueValidator = __decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], isUniqueValidator);
exports.isUniqueValidator = isUniqueValidator;
function IsUnique(params, validationOptions) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [params],
            validator: isUniqueValidator,
        });
    };
}
exports.IsUnique = IsUnique;
//# sourceMappingURL=is-unique-v2.js.map