"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Boom = __importStar(require("@hapi/boom"));
const Joi = require('@hapi/joi');
exports.creditCheckSchema = {
    payload: Joi.object({
        creditCardNumber: Joi.number()
            .min(111111111111)
            .max(999999999999)
            .required(),
        cvv: Joi.number()
            .min(111)
            .max(999)
            .required(),
    }),
    failAction: (request, h, error) => {
        console.log(request);
        return Boom.badRequest('This is how to frame Error Response', error.details[0].message);
    }
};
//# sourceMappingURL=credit-check.schema.js.map