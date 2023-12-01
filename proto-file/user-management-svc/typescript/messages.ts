export type SignInRequest = {
  username: string;
  password: string;
};

export type SignUpRequest = {
  username: string;
  password: string;
  name: string;
  birthDay: string;
};

export type AccountInfoResponse = {
  id: string;
  name: string;
  birthDay: string;
};

export type AccessToken = {
  token: string;
};

export type BaseResponse = {
  statusCode: string;
  message: string;
};

export type TokenResponse = {
  responseStatus: BaseResponse;
  access: string;
  refresh: string;
};
