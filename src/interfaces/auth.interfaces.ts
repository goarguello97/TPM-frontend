export interface AuthRegister {
  username: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

export interface AuthLogin {
  email: string;
  password: string;
}

export interface AuthState {
  error: any;
  operationSuccess: boolean;
  userRegister: any;
  Userlogged: any;
  isUserLogged: boolean;
  loading: boolean;
}

export type RequestResponse = {
  status: string;
  payload: Payload;
};

type Payload = {
  message: string;
  token: string;
  user: any;
};