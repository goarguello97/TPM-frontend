import { AuthLogin } from "../interfaces/auth.interfaces";
import { ErrorInterface } from "../interfaces/validations.interfaces";

export const validationLogin = (values: AuthLogin) => {
  let errors = {} as ErrorInterface;
  let emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "The email is not valid.";
  } else if (values.email.length < 10) {
    errors.lastname = "The email must have a minimum of 10 characters.";
  } else if (values.email.length > 50) {
    errors.email = "The email must not have more than 50 characters.";
  }

  if (!values.password) {
    errors.password = "The password is required.";
  } else if (values.password.length < 1) {
    errors.password = "The password must have at least 1 characters.";
  }

  return errors;
};
