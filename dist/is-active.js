"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsActive = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let IsActive = class IsActive {
    async validate(value, args) {
        const [EntityClass, findCondition = args.property] = args.constraints;
        const entity = await typeorm_1.getRepository(EntityClass).findOneOrFail({
            where: typeof findCondition === 'function'
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
    defaultMessage() {
        return '$property must be active!';
    }
};
IsActive = __decorate([
    class_validator_1.ValidatorConstraint({ name: 'active', async: true })
], IsActive);
exports.IsActive = IsActive;
//# sourceMappingURL=is-active.js.map