import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EClientName } from './client-name';
import { IEnvConfiguration } from '../config';

@Global()
@Module({
  imports: [
    ClientsModule.registerAsync([
      // register user management service
      {
        name: EClientName.USER_MANAGEMENT_SVC,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: ({
          internalConfig,
        }: {
          internalConfig: IEnvConfiguration;
        }) => ({
          transport: Transport.GRPC,
          options: {
            package: 'auth',
            url: internalConfig.userManagementSvc.url,
            protoPath:
              internalConfig.protoFileRepo.url +
              '/user-management-svc/auth.proto',
          },
        }),
      },

      // register video metadata service
      {
        name: EClientName.VIDEO_METADATA_SVC,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: ({
          internalConfig,
        }: {
          internalConfig: IEnvConfiguration;
        }) => ({
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: 'api-gateway-client-test',
              brokers: [internalConfig.kafka.url],
            },
            consumer: {
              groupId: 'api-gateway-consumer-test',
            },
          },
        }),
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class ClientRegisterModule {}
