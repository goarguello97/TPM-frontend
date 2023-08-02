export interface UserState {
  error: any;
  operationSuccess: boolean;
  user: User | null;
  users: User[] | null;
  loading: boolean;
}

interface User {
  _id: string;
  username: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  mentor: any[];
  role: Role;
  md: any[];
  matchReq: string[];
  matchSend: string[];
  match: string[];
  verify: boolean;
  skills: any[];
}

interface Role {
  _id: string;
  role: string;
}
