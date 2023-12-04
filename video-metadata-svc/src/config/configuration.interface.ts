export interface IEnvConfiguration {
  app: {
    environment: string;
    port: number;
    serviceUrl: string;
  };
  kafka: {
    url: string;
  };
  database: {
    postgres: {
      host: string;
      port: number;
      username: string;
      password: string;
      dbName: string;
    };
  };
}
