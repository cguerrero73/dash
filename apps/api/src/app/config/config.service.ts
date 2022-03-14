import { Configuration } from './config.keys';
import * as dotenv from 'dotenv';

export class ConfigService {

    private readonly envConfig: { [key: string]: string };

    

    constructor() {
        console.log('Entorno=>', process.env.NODE_ENV);
        console.log('Puerto=>',process.env.PORT);

        // console.log('Entorno', dotenv.config());

        // const isDevelopmentEnv = process.env.NODE_ENV !== "production";

        // if (isDevelopmentEnv) {

        //     console.log('Buscando archivo .env =>', __dirname);

        //     const envFilePath = __dirname + '/../../.env';
        //     const existPath = fs.existsSync(envFilePath);

        //     if (!existPath) {
        //         console.log('.env file does not exist');
        //         process.exit(0);
        //     }

        //     this.envConfig = parse(fs.readFileSync(envFilePath));
        // } else {
        //     this.envConfig = {
        //         PORT: process.env.PORT,
        //     }
        // }

    }

    get(key: string): string | number {
        return process.env[key];
    }
}