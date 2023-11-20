import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { IEnvConfiguration } from './config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  const { internalConfig }: { internalConfig: IEnvConfiguration } =
    app.get(ConfigService);

  await app.listen(internalConfig.app.port);
  console.info(`API Gateway is running on:: ${await app.getUrl()}`);
}
bootstrap();
