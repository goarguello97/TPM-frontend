import { useEffect } from "react";
import { useState } from "react";
import { useAppDispatch } from "./useTypedSelector";
import { NAMES } from "../constants/initialValues";

const useForm = (initialValues: any, submit: any, validations: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [role, setRole] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [flag, setFlag] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        dispatch(submit(values));
      }
      setSubmitting(false);
      setTimeout(() => {
        setErrors({});
      }, 5000);
    }
    if (Object.values(initialValues)[0]) {
      if (flag) {
        setValues(initialValues);
        setFlag(false);
      }
    }
    if (initialValues.role) {
      if (initialValues.role.length > 0) {
        setValues(initialValues);
        setFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, initialValues]);

  const handleChange = (e: any) => {
    if (
      e.target.name === NAMES.NAME ||
      e.target.name === NAMES.LASTNAME ||
      e.target.name === NAMES.USERNAME ||
      e.target.name === NAMES.PASSWORD ||
      e.target.name === NAMES.COUNTRY
    ) {
      setValues({ ...values, [e.target.name]: e.target.value.slice(0, 30) });
    } else if (e.target.name === NAMES.EMAIL) {
      setValues({ ...values, [e.target.name]: e.target.value.slice(0, 50) });
    } else if (e.target.name === NAMES.ROLE) {
      setRole(!role);
      setValues({ ...values, [e.target.name]: e.target.value });
    } else if (e.target.value === NAMES.BIRTH) {
      setValues({
        ...values,
        [e.target.name]: e.target.value.substring(0, 10),
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validations) {
      setErrors(validations(values));
    } else {
      setErrors({});
    }
    setSubmitting(true);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    setValues,
    role,
  };
};

export default useForm;
