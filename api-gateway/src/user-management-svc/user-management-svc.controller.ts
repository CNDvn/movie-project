import { Controller, Post } from '@nestjs/common';
import { UserManagementSvcService } from './user-management-svc.service';

@Controller('user-management-svc')
export class UserManagementSvcController {
  constructor(
    private readonly userManagementSvcService: UserManagementSvcService,
  ) {}

  @Post('sign-in')
  async signIn() {
    return await this.userManagementSvcService.signIn();
  }

  @Post('sign-up')
  async signUp() {
    return await this.userManagementSvcService.signUp();
  }

  @Post('sign-out')
  async signOut() {
    return await this.userManagementSvcService.signUp();
  }
}
