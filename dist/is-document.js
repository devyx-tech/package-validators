"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDocument = void 0;
const class_validator_1 = require("class-validator");
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
let IsDocument = class IsDocument {
    validate(text, args) {
        return cpf_cnpj_validator_1.cpf.isValid(text);
    }
    defaultMessage(args) {
        return '$property is invalid!';
    }
};
IsDocument = __decorate([
    class_validator_1.ValidatorConstraint({ name: 'IsDocument', async: false })
], IsDocument);
exports.IsDocument = IsDocument;
//# sourceMappingURL=is-document.js.map