"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creditCheck_controller_1 = require("../controllers/creditCheck.controller");
const credit_check_schema_1 = require("../schemas/credit-check.schema");
exports.submitCreditCheck = {
    method: 'POST',
    path: '/creditCheck',
    handler: creditCheck_controller_1.CreditCheckHandler,
    options: {
        description: 'my credit check post description',
        notes: 'Important stuff to know about this route',
        tags: ['app'],
        validate: credit_check_schema_1.creditCheckSchema,
    }
};
exports.getSomeOtherRoute = {
    method: 'GET',
    path: '/someRoute',
    handler: creditCheck_controller_1.CreditCheckHandler,
};
//# sourceMappingURL=creditCheck.route.js.map