import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserManagementSvcModule } from './user-management-svc/user-management-svc.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    UserManagementSvcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
