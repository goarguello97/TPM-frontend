export interface UserState {
  error: any;
  message: string | null;
  operationSuccess: boolean;
  user: User | null;
  users: User[] | null;
  loading: boolean;
}

export interface User {
  _id: string;
  username: string;
  name: string;
  dateOfBirth: string;
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
  createdAt: Date;
  avatar: Avatar;
}

interface Role {
  _id: string;
  role: string;
}

interface Avatar {
  _id: string;
  imageUrl: string;
}
