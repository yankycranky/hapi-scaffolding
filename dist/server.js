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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = __importDefault(require("@hapi/hapi"));
const env_config_1 = require("./src/config/env/env.config");
const routes_1 = __importDefault(require("./src/app/routes"));
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    let token = "";
    const server = new hapi_1.default.Server({
        port: env_config_1.EnvConfig.PORT,
        host: 'localhost',
        routes: {
            // Following will be read from config file
            cors: {
                origin: ['*'],
                headers: ['Authorization'],
                exposedHeaders: ['Accept'],
                additionalExposedHeaders: ['Accept'],
                maxAge: 60,
                credentials: true // boolean - 'Access-Control-Allow-Credentials'
            }
        }
    });
    server.ext('onRequest', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        // do something
        return reply.continue;
    }));
    server.route(routes_1.default);
    yield server.start();
    console.log('Server running on %s', server.info.uri);
});
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
init();
//# sourceMappingURL=server.js.map