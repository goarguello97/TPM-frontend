export interface RoleState {
  error: any;
  roles: Role[] | null;
  loading: any;
  operationSuccess: boolean;
}

interface Role {
  _id: string;
  role: string;
}

export type RequestResponse = {
  data: Data;
};

type Data = { status: string; payload: Payload };

type Payload = {
  roles: [any];
};
