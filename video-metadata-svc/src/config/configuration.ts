import { EEnvironment } from '../constants';
import { IEnvConfiguration } from './configuration.interface';

export default (): IEnvConfiguration => ({
  app: {
    environment: Object.values(EEnvironment).find(
      (item) => item === process.env.ENVIRONMENT,
    ),
    port: parseInt(process.env.PORT, 10),
    serviceUrl: process.env.SERVICE_URL,
  },
  kafka: { url: process.env.KAFKA_URL },
  database: {
    postgres: {
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      dbName: process.env.POSTGRES_DB_NAME,
    },
  },
});
