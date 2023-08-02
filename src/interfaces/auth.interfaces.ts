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
  operationSuccess: any;
  userRegister: any;
  userLogged: any;
  isUserLogged: boolean;
  loading: boolean;
  message: any;
}

export type RequestResponse = {
  data: { status: string; payload: Payload };
};

type Payload = {
  message: string;
  token: string;
  user: any;
  users: any;
};
