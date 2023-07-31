import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import Loader from "../commons/Loader";
import { Navigate } from "react-router-dom";
import { secret } from "../features/Auth/AuthSlice";
import { ROLE } from "../constants/roles";

const PrivateRouteAdmin = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const { userLogged, isUserLogged, loading } = useAppSelector(
    (state) => state.auth
  );
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (!isUserLogged) dispatch(secret());
    setFlag(true);
  }, [flag, isUserLogged]);

  if (loading) return <Loader />;

  return flag ? (
    isUserLogged && userLogged.role.role === ROLE.ADMIN ? (
      children
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Loader />
  );
};

export default PrivateRouteAdmin;
