import { EEnvironment } from '../constants';
import { IEnvConfiguration } from './configuration.interface';

export default (): IEnvConfiguration => ({
  app: {
    environment: Object.values(EEnvironment).find(
      (item) => item === process.env.ENVIRONMENT,
    ),
    port: parseInt(process.env.PORT, 10),
  },
  kafka: {
    url: process.env.KAFKA_URL,
  },
  userManagementSvc: {
    url: process.env.USER_MANAGEMENT_SVC_URL,
  },
  protoFileRepo: {
    url: process.env.PROTO_FILE_REPO_URL,
  },
});
