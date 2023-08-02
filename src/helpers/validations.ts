import { error } from "console";
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

export const validationRegister = (values: any) => {
  let errors = {} as ErrorInterface;
  let allRegex = new RegExp(
    /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚúÜü]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/
  );

  let emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
  let passwordRegex = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );
  let dateRegex = new RegExp(/^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/);

  if (!values.name) {
    errors.name = "The name is required.";
  } else if (values.name.length < 3) {
    errors.name = "The name must have a minimum of 3 characters.";
  } else if (values.name.length > 30) {
    errors.name = "The name cannot be longer than 30 characters.";
  } else if (!allRegex.test(values.name)) {
    errors.name = "The name can only contain letters or numbers.";
  }

  if (!values.lastname) {
    errors.lastname = "The last name is required.";
  } else if (values.lastname.length < 3) {
    errors.lastname = "The lastname must have a minium of 3 characters.";
  } else if (values.lastname.length > 30) {
    errors.lastname = "The lastname cannot be longer than 30 characters.";
  } else if (!allRegex.test(values.lastname)) {
    errors.lastname = "The lastname can only contain letters or numbers.";
  }

  if (!values.email) {
    errors.email = "The email is required.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "The email is not valid.";
  } else if (values.email.length < 10) {
    errors.lastname = "The email must have a minium of 10 characters.";
  } else if (values.email.length > 50) {
    errors.email = "The email cannot be longer than 50 characters.";
  }

  if (!values.password) {
    errors.password = "The password is required.";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "The password is invalid. It must contain a capital letter, a number and a special character.";
  } else if (values.password.length < 8) {
    errors.password = "The password must have at least 8 characters.";
  } else if (values.password.length > 30) {
    errors.password = "The password must not have more than 30 characters.";
  }

  if (!values.username) {
    errors.username = "The username is required.";
  } else if (values.username.length < 3) {
    errors.username = "The username must have a minium of 3 characters.";
  } else if (values.username.length > 30) {
    errors.username = "The username cannot be longer than 30 characters.";
  } else if (!allRegex.test(values.username)) {
    errors.username = "The username can only contain letters or numbers.";
  }

  if (!values.country) {
    errors.country = "The country is required.";
  } else if (values.country.length < 3) {
    errors.country = "The country must have a minium of 3 characters.";
  } else if (values.country.length > 30) {
    errors.country = "The country cannot be longer than 30 characters.";
  } else if (!allRegex.test(values.country)) {
    errors.country = "The country can only contain letters or numbers.";
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = "The date of birth is required.";
  } else if (!dateRegex.test(values.dateOfBirth)) {
    errors.dateOfBirth = "The date of birth is invalid.";
  }

  if (!values.role) {
    errors.role = "The role is required.";
  }

  return errors;
};

export const validationRecoverPass = (values: any) => {
  let errors = {} as ErrorInterface;
  let emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "The email is not valid.";
  }

  return errors;
};

export const validationPass = (values:any)=>{
  let errors = {} as ErrorInterface;
  let passwordRegex = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );

  if (!values.password) {
    errors.password = "The password is required.";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "The password is invalid. It must contain a capital letter, a number and a special character.";
  } else if (values.password.length < 8) {
    errors.password = "The password must have at least 8 characters.";
  } else if (values.password.length > 30) {
    errors.password = "The password must not have more than 30 characters.";
  }
  
  return errors
}