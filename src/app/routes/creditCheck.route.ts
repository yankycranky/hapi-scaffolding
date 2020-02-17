import { CreditCheckHandler } from "../controllers/creditCheck.controller";
import { creditCheckSchema } from "../schemas/credit-check.schema";

export const submitCreditCheck = {
    method: 'POST',
    path: '/creditCheck',
    handler: CreditCheckHandler,
    options: {
        description: 'my credit check post description',
        notes: 'Important stuff to know about this route',
        tags: ['app'],
        validate: creditCheckSchema,
    }

}

export const getSomeOtherRoute = {
    method: 'GET',
    path: '/someRoute',
    handler: CreditCheckHandler,
    // options: {
    //     validate: creditCheckSchema,
    // }
}