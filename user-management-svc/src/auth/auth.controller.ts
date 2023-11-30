import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import * as ums from 'ums-proto';
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod(ums.AuthService.name, ums.AuthService.method.SignIn)
  async signIn(
    signInReq: ums.SignInRequest,
    // metadata: Metadata,
    // call: ServerUnaryCall<any, any>,
  ): Promise<ums.TokenResponse> {
    // console.log(metadata);
    // console.log(call);

    return await this.authService.signIn(signInReq);
  }
  @GrpcMethod(ums.AuthService.name, ums.AuthService.method.SignUp)
  async signUp(
    signUpReq: ums.SignUpRequest,
    // metadata: Metadata,
    // call: ServerUnaryCall<any, any>,
  ): Promise<ums.TokenResponse> {
    return await this.authService.signUp(signUpReq);
  }
  @GrpcMethod(ums.AuthService.name, ums.AuthService.method.SignOut)
  async signOut(
    accessToken: ums.AccessToken,
    // metadata: Metadata,
    // call: ServerUnaryCall<any, any>,
  ): Promise<ums.BaseResponse> {
    return await this.authService.signOut(accessToken);
  }
}
