import {
  AccessToken,
  BaseResponse,
  SignInRequest,
  SignUpRequest,
  TokenResponse,
} from "./messages";

interface IMethod {
  signIn: string;
  signUp: string;
  signOut: string;
}
const methods: IMethod = {
  signIn: "signIn",
  signUp: "signUp",
  signOut: "signOut",
};
export abstract class AuthService {
  static get methods(): IMethod {
    return methods;
  }
  abstract signIn(signInReq: SignInRequest): TokenResponse;
  abstract signUp(signUpReq: SignUpRequest): TokenResponse;
  abstract signOut(accessToken: AccessToken): BaseResponse;
}
