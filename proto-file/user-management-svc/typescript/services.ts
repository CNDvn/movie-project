import {
  AccessToken,
  BaseResponse,
  SignInRequest,
  SignUpRequest,
  TokenResponse,
} from "./messages";

export abstract class AuthService {
  abstract SignIn(signInReq: SignInRequest): TokenResponse;
  abstract SignUp(signUpReq: SignUpRequest): TokenResponse;
  abstract SignOut(accessToken: AccessToken): BaseResponse;
}
