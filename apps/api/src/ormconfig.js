/* eslint-disable no-undef */
CustomNamingStrategy = require('./app/config/CustomNamingStrategy').CustomNamingStrategy;

module.exports = {
  type: 'postgres',
  username: 'eam',
  password: 'yiklo8ufPITumeJs',
  host: 'db-postgresql-sfo3-01-do-user-11092687-0.b.db.ondigitalocean.com',
  port: 25060,
  database: 'eam',

  entities: ['apps/backend/src/app/**/**/*.entity{.ts,.js}'],
  migrations: ['apps/backend/src/app/database/migrations/*{.ts,.js}'],
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync( __dirname + '/assets/ca-certificate.crt').toString(),
  },
  namingStrategy: new CustomNamingStrategy(),
  cli: {
    migrationsDir: 'apps/backend/src/app/database/migrations',
  },
};
