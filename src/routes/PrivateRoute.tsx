import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { secret } from "../features/Auth/AuthSlice";
import { Navigate } from "react-router-dom";
import Loader from "../commons/Loader";

const PrivateRoute = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const { isUserLogged, loading } = useAppSelector((state) => state.auth);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (!isUserLogged) dispatch(secret());
    setFlag(true);
  }, [flag, isUserLogged]);

  if (loading) return <Loader />;

  return flag ? isUserLogged ? children : <Navigate to="/" /> : <Loader />;
};

export default PrivateRoute;
