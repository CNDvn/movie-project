import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IEnvConfiguration } from './config';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { internalConfig }: { internalConfig: IEnvConfiguration } =
    app.get(ConfigService);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [internalConfig.kafka.url],
        clientId: 'VIDEO_METADATA_SVC',
      },
    },
  });

  await app.startAllMicroservices();

  // await app.listen(3000);
  console.log(
    'Video Metadata Service is running on::',
    internalConfig.app.serviceUrl,
  );
}
bootstrap();
