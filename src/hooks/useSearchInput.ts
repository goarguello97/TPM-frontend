import { useEffect, useState } from "react";
import { useAppDispatch } from "./useTypedSelector";

function useSearchInput() {
  const [values, setValues] = useState({ search: "", query: "" });
  const [flag, setFlag] = useState()
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]:
        e.target.value.slice(0, 1).toUpperCase() +
        e.target.value.slice(1).toLowerCase(),
      query: `?input=${
        e.target.value.slice(0, 1).toUpperCase() +
        e.target.value.slice(1).toLowerCase()
      }`,
    });
  };

  useEffect(()=>{},[values])

  return { values, setValues, handleChange };
}

export default useSearchInput;
