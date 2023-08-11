export const REGISTER_INITIAL_VALUES = {
  username: "",
  email: "",
  password: "",
  name: "",
  lastname: "",
  dateOfBirth: "",
  country: "",
  role: "",
};

export const LOGIN_INITIAL_VALUES = {
  email: "",
  password: "",
};

export const RECOVER_INITIAL_VALUE = {
  email: "",
};

export const NEW_PASS_INITIAL_VALUE = {
  email: "",
  password: "",
};

export const UPDATE_INITIAL_VALUES = {
  _id: "",
  email: "",
  name: "",
  password: "",
  lastname: "",
  dateOfBirth: "",
  role: "",
};

export enum NAMES {
  NAME = "name",
  LASTNAME = "lastname",
  USERNAME = "username",
  EMAIL = "email",
  COUNTRY = "country",
  PASSWORD = "password",
  ROLE = "role",
  BIRTH = "dateOfBirth",
}
