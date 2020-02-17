import { ResponseToolkit } from "@hapi/hapi";
import * as Boom from "@hapi/boom";

const Joi = require('@hapi/joi');

export const creditCheckSchema = {
    payload: Joi.object({

        creditCardNumber: Joi.number()
            .min(111111111111)
            .max(999999999999)
            .required(),
        cvv: Joi.number()
            .min(111)
            .max(999)
            .required(),

        // Example
        // username: Joi.string()
        //     .alphanum()
        //     .min(3)
        //     .max(30)
        //     .required(),
    }),
    failAction: (request: Request, h: ResponseToolkit, error: any) => {
        console.log(request);
        return Boom.badRequest('This is how to frame Error Response', error.details[0].message);
    }
};