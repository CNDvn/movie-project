import { Module } from '@nestjs/common';
import { UserManagementSvcService } from './user-management-svc.service';
import { UserManagementSvcController } from './user-management-svc.controller';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [UserManagementSvcController],
  providers: [UserManagementSvcService],
})
export class UserManagementSvcModule {}
