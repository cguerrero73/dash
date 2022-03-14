import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions, getMetadataArgsStorage } from 'typeorm';
import { Configuration } from '../config/config.keys';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { CustomNamingStrategy } from '../config/CustomNamingStrategy';

import * as fs from 'fs';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {

      return {
        type: 'postgres',
        host: config.get(Configuration.DB_HOST),
        database: config.get(Configuration.DB_DATABASE),
        username: config.get(Configuration.DB_USERNAME),
        password: config.get(Configuration.DB_PASSWORD),
        port: config.get(Configuration.DB_PORT),
        ssl: {
          rejectUnauthorized: false,
          ca: fs.readFileSync( __dirname + '/assets/ca-certificate.crt').toString(),
        },
        entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        logging: true,
        namingStrategy: new CustomNamingStrategy()
      } as ConnectionOptions;
    },
  }),
];
