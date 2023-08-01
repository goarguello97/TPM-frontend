import { useEffect } from "react";
import { useState } from "react";
import { useAppDispatch } from "./useTypedSelector";

const useForm = (initialValues: any, submit: any, validations: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [role, setRole] = useState(true);
  const [submitting, setSubmitting] = useState(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const handleChange = (e: any) => {
    if (e.target.name === "role") {
      setRole(!role);
      setValues({ ...values, [e.target.name]: e.target.value });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }

    // console.log(values);
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
