import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { IEnvConfiguration } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { internalConfig }: { internalConfig: IEnvConfiguration } =
    app.get(ConfigService);

  app.connectMicroservice<GrpcOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      url: internalConfig.app.serviceUrl,
      protoPath:
        internalConfig.protoFileRepo.url + '/user-management-svc/auth.proto',
    },
  });
  await app.startAllMicroservices();

  console.log(
    'User Management Service is running on::',
    internalConfig.app.serviceUrl,
  );
}
bootstrap();
