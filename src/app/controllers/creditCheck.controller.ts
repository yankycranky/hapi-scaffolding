import { ResponseToolkit, Request } from "@hapi/hapi";
import * as Boom from "@hapi/boom";

export const CreditCheckHandler = async (request: Request, h: ResponseToolkit, err?: Error) => {
    console.log("href", request.url.href);
    console.log("payload", request.payload);
    // All the logic of controller here
    if (err?.message === 'NOT_FOUND') {
        // USE Boom library to frame errors
        return h.response(Boom.notFound('This is a sample error', err))
    }

    return h.response({ item: 'No special configuration to send JSON response', url: request.url.href });
}