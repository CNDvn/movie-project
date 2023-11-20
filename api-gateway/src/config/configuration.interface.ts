export interface IEnvConfiguration {
  app: {
    environment: string;
    port: number;
  };
  kafka: {
    url: string;
  };
  userManagementSvc: {
    url: string;
  };
  protoFileRepo: { url: string };
}
