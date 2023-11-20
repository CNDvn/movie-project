export enum EEnvironment {
  localDev = 'localDev',
  production = 'production',
}

export class Env {
  public static get environment() {
    return Object.values(EEnvironment).find(
      (item) => item === process.env.ENVIRONMENT,
    );
  }

  public static get port() {
    return process.env.PORT;
  }

  public static get kafkaUrl() {
    return process.env.KAFKA_URL;
  }
}
