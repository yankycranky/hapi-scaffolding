"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Boom = __importStar(require("@hapi/boom"));
exports.CreditCheckHandler = (request, h, err) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log("href", request.url.href);
    console.log("payload", request.payload);
    // All the logic of controller here
    if (((_a = err) === null || _a === void 0 ? void 0 : _a.message) === 'NOT_FOUND') {
        // USE Boom library to frame errors
        return h.response(Boom.notFound('This is a sample error', err));
    }
    return h.response({ item: 'No special configuration to send JSON response', url: request.url.href });
});
//# sourceMappingURL=creditCheck.controller.js.map