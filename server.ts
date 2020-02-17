import Hapi, { ResponseToolkit } from '@hapi/hapi';
import { EnvConfig } from './src/config/env/env.config';
import routeConfig from './src/app/routes';

const init = async () => {

    let token = "";
    const server = new Hapi.Server({
        port: EnvConfig.PORT,
        host: 'localhost',
        routes: {
            // Following will be read from config file
            cors: {
                origin: ['*'], // an array of origins or 'ignore'
                headers: ['Authorization'], // an array of strings - 'Access-Control-Allow-Headers' 
                exposedHeaders: ['Accept'], // an array of exposed headers - 'Access-Control-Expose-Headers',
                additionalExposedHeaders: ['Accept'], // an array of additional exposed headers
                maxAge: 60,
                credentials: true // boolean - 'Access-Control-Allow-Credentials'
            }
        }
    });


    server.ext('onRequest', async (request, reply: ResponseToolkit) => {

        // do something
        return reply.continue;
    });


    server.route(routeConfig);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

