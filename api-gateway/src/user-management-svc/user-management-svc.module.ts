import { Module } from '@nestjs/common';
import { UserManagementSvcService } from './user-management-svc.service';
import { UserManagementSvcController } from './user-management-svc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IEnvConfiguration } from '../config';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        name: 'AUTH_PACKAGE',
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
    ]),
    HttpModule,
  ],
  controllers: [UserManagementSvcController],
  providers: [UserManagementSvcService],
})
export class UserManagementSvcModule {}
