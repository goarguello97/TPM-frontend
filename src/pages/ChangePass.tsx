import Logo from "../assets/img/ThePerfectMentor.svg";
import Doodle from "../assets/img/Doodle.svg";
import Doodle2 from "../assets/img/Doodle2.svg";
import Doodle4 from "../assets/img/Doodle4.svg";
import MaskGroup from "../assets/img/MaskGroup.svg";
import Email from "../assets/img/Email.svg";
import Password from "../assets/img/Password.svg";
import useForm from "../hooks/useFormHook";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import {
  reset,
  autorizeChangePassword,
  updatePassword,
} from "../features/Auth/AuthSlice";
import { useNavigate, useParams } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { NEW_PASS_INITIAL_VALUE } from "../constants/initialValues";
import { validationPass } from "../helpers/validations";

const ChangePass = () => {
  const { width } = useMediaQuery();
  const { operationSuccess, error, message } = useAppSelector(
    (state) => state.auth
  );
  const { values, handleChange, handleSubmit, errors } = useForm(
    NEW_PASS_INITIAL_VALUE,
    updatePassword,
    validationPass
  );
  const [flag, setFlag] = useState(true);
  const { token } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (flag) {
      dispatch(autorizeChangePassword(token));
      setFlag(false);
    }

    if (error) {
      setTimeout(() => {
        dispatch(reset());
        navigate("/login");
      }, 5000);
    }

    if (message) {
      setTimeout(() => {
        dispatch(reset());
        navigate("/login");
      }, 5000);
    }
  }, [operationSuccess, error, message]);

  console.log(values);
  return (
    <div className="w-screen h-screen bg-background flex flex-col items-center justify-center">
      {width < 1024 ? (
        <form
          className="min-h-100% bg-background relative flex flex-col justify-center items-start"
          onSubmit={handleSubmit}
        >
          <img
            className="absolute w-[182.44px] top-[72px] right-[29px] rotate-doodle z-1 "
            src={Doodle}
            alt="Doodle"
          />
          <img
            className="absolute w-[108.86px] top-[45px] left-[121px] z-1"
            src={Doodle2}
            alt="Doodle2"
          />
          <img
            className="w-[200.62px] ml-[30px] fold-horizontal:mt-[30px] z-10"
            src={Logo}
            alt="The Perfect Mentor"
          />
          {error && <h1 className="text-error font-bold mx-auto">{error}</h1>}

          {operationSuccess && (
            <>
              <div className="bg-background w-sign-in min-h-[361px] h-auto border-[2px] mt-[20.58px] mb-[25px] mx-auto border-button rounded-[40px] z-10 flex flex-col">
                <p className="text-title font-bold text-[30px] ms-[25px] mt-[30px] mb-[12px]">
                  Change password
                </p>
                <div className="w-line border-dashed border-b-2 border-border mx-auto"></div>
                <p className="text-title text-[30px] font-normal ms-[25px] mt-[25px] mb-[13px]">
                  Enter your new password
                </p>
                <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="email"
                    className="bg-transparent w-[100%] h-[100%] text-[14px] text-title placeholder-title focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
                    required
                  />
                  <img
                    src={Email}
                    alt=""
                    className="absolute w-[32px] top-[12px] left-[11px]"
                  />
                </div>
                <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="new password"
                    className="bg-transparent w-[100%] h-[100%] text-[14px] text-title placeholder-title focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
                    min={10}
                    max={30}
                    required
                  />
                  <img
                    src={Password}
                    alt="Password"
                    className="absolute w-[32px] top-[12px] left-[11px]"
                  />
                </div>

                {Object.keys(errors).length !== 0
                  ? Object.values(errors).map((error: any, i) => (
                      <p
                        key={i}
                        className="w-full h-[22.5px] ms-[39px] mb-[10px] text-[14px] text-error font-bold"
                      >
                        {error}
                      </p>
                    ))
                  : null}
                {error ? (
                  <p className="w-full h-[22.5px] ms-[39px] mb-[10px] text-[14px] text-error font-bold">
                    {error}
                  </p>
                ) : null}
                {message && (
                  <p className="w-full h-[22.5px] ms-[39px] mb-[10px] text-[14px] text-loader font-bold">
                    {message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-button h-[55px] mx-auto fold-horizontal:mb-[30px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
              >
                Change password
              </button>
            </>
          )}
        </form>
      ) : (
        <div className="w-[100vw] h-[100vh] bg-background flex justify-center items-center relative z-0">
          <div className="w-container-desktop min-h-[479px] h-auto bg-transparent border-[2px] border-[#444444] rounded-[40px] flex justify-center items-center relative z-10">
            <img
              src={Logo}
              alt="Logo"
              className="w-[200.62px] absolute top-[-122.83px] left-[50%] xl:left-[50%] translate-x-[-50%] xl:translate-x-0 z-30"
            />
            <img
              src={MaskGroup}
              alt="MaskGroup"
              className="w-[228px] absolute left-[5%] top-[0%] translate-x-[-50%] translate-y-[-50%] z-20"
            />
            <div className="hidden xl:block xl:w-[50%] h-[100%] relative">
              <img
                src={Doodle4}
                alt="Doodle4"
                className="w-[204.46px] absolute top-[85%] left-[15%] translate-x-[-50%] translate-y-[-50%]"
              />
              <div className="w-[572px] h-[572px] bg-saly3 bg-no-repeat bg-contain absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
                <img
                  src={Doodle}
                  alt="Doodle"
                  className="w-[184.89px] absolute top-[45%] right-[-5%] translate-x-[-50%] translate-y-[-50%] rotate-180"
                />
                <img
                  src={Doodle2}
                  alt="Doodle2"
                  className="w-[245px] h-[250px] absolute top-[10%] right-[-20%] translate-x-[-50%] translate-y-[-50%] rotate-[140deg] z-40"
                />
              </div>
            </div>
            <div className="hidden xl:block w-0 h-[416px] border-title border-[1px]"></div>
            {!error && !operationSuccess && (
              <div className="w-[100%] xl:w-[50%] h-[100%] xl:ps-[50px] flex flex-col items-center xl:items-start justify-center relative">
                <h1 className="text-error font-bold mx-auto">{error}</h1>
              </div>
            )}
            {error && (
              <div className="w-[100%] xl:w-[50%] h-[100%] xl:ps-[50px] flex flex-col items-center xl:items-start justify-center relative">
                <h1 className="text-error font-bold mx-auto">{error}</h1>
              </div>
            )}
            {operationSuccess && (
              <form
                className="w-[100%] xl:w-[50%] h-[100%] xl:ps-[50px] flex flex-col items-center xl:items-start justify-center relative"
                onSubmit={handleSubmit}
              >
                <p className="w-auto mt-[30px] text-title text-[40px] font-extrabold leading-[59px] z-30">
                  Change password
                </p>
                <div className="w-input desktop:w-input-desktop max-w-[323px] h-[0px] border-b-[1px] border-title border-dashed mt-[10px]"></div>
                <p className="w-auto mt-[13px] mb-[15px] text-title text-[30px] font-normal leading-[44px]">
                  Enter your new password
                </p>
                <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="email"
                    className="bg-transparent w-full h-[100%] text-title text-[14px] placeholder-title focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
                  />
                  <img
                    src={Email}
                    alt=""
                    className="absolute w-[32px] top-[9px] left-[11px]"
                  />
                </div>
                <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="new password"
                    className="bg-transparent w-full h-[100%] text-title text-[14px] placeholder-title focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
                  />
                  <img
                    src={Password}
                    alt="password"
                    className="absolute w-[32px] top-[9px] left-[11px]"
                  />
                </div>
                {Object.keys(errors).length !== 0
                  ? Object.values(errors).map((error: any, i) => (
                      <p
                        key={i}
                        className="mt-[15px] text-error text-[14px] font-bold leading-[18px]"
                      >
                        {error}
                      </p>
                    ))
                  : null}
                {error ? (
                  <p className="mt-[15px] text-error text-[14px] font-bold leading-[18px]">
                    {error}
                  </p>
                ) : null}
                {message && (
                  <p className="mt-[15px] text-loader text-[14px] font-bold leading-[18px]">
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mt-[20px] mb-[80px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
                >
                  Change password
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePass;
