import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { useNavigate, useParams } from "react-router-dom";
import { reset, verifyUser } from "../features/Auth/AuthSlice";
import TPM from "../assets/img/ThePerfectMentor.svg";

const Auth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true);
  const { operationSuccess, error } = useAppSelector((state) => state.auth);
  let { token } = useParams();

  useEffect(() => {
    if (flag) {
      dispatch(verifyUser(token));
      setFlag(false);
    }
    if (operationSuccess) {
      setTimeout(() => {
        dispatch(reset());
        navigate("/login");
      }, 5000);
    }
  }, [operationSuccess, error]);

  return (
    <div className="w-screen h-screen bg-background flex flex-col items-center justify-center">
      <img src={TPM} alt="TPM" className="mb-[20%]" />
      {operationSuccess ? (
        <h1 className="text-loader font-bold">
          Congratulations, your account has been activated!
        </h1>
      ) : null}
      {error ? <h1 className="text-error font-bold">{error}</h1> : null}
    </div>
  );
};

export default Auth;
