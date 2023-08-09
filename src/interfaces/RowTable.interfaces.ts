export interface ReportRow {
  name: string;
  reason: string;
  role: string;
  joinedDate: string;
  email: string;
  status: boolean;
}

export interface UserRow {
  name: string;
  age: string | number;
  email: string;
  role: string;
  joinedDate: string;
  status: boolean;
}
