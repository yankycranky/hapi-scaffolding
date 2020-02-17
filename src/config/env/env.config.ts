import envConfig from 'dotenv';

envConfig.config();

export const EnvConfig = {
    PORT: process.env.PORT || 4000
}

