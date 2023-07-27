export interface MatchState {
  error: any;
  loading: boolean;
  operationSuccess: boolean;
}

export type RequestResponse = {
  status: string;
  payload: Payload;
};

type Payload = {
  message: any;
};
