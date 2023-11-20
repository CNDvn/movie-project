import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { AuthService } from './auth.service';
import { GrpcServiceName } from 'src/constants';
import { AccountId, AccountInfo } from './dtos';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod(GrpcServiceName.AUTH_SERVICE, 'signIn')
  async signIn(
    data: AccountId,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Promise<AccountInfo> {
    console.log(metadata);
    console.log(call);
    return await this.authService.signIn(data.id);
  }
  @GrpcMethod(GrpcServiceName.AUTH_SERVICE, 'signUp')
  async signUp(
    data: AccountId,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Promise<AccountInfo> {
    console.log(metadata);
    console.log(call);
    return await this.authService.signUp(data.id);
  }
  @GrpcMethod(GrpcServiceName.AUTH_SERVICE, 'signOut')
  async signOut(
    data: AccountId,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Promise<AccountInfo> {
    console.log(metadata);
    console.log(call);
    return await this.authService.signOut(data.id);
  }
}
