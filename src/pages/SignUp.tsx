import Logo from "../assets/img/ThePerfectMentor.svg";
import Doodle from "../assets/img/Doodle.svg";
import Doodle2 from "../assets/img/Doodle2.svg";
import Doodle4 from "../assets/img/Doodle4.svg";
import MaskGroup from "../assets/img/MaskGroup.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect } from "react";
import useForm from "../hooks/useFormHook";
import { REGISTER_INITIAL_VALUES } from "../constants/initialValues";
import { registerUser } from "../features/Auth/AuthSlice";
import { validationRegister } from "../helpers/validations";
import { useAppSelector } from "../hooks/useTypedSelector";
import useGetRole from "../hooks/useGetRole";
import RegisterForm from "../commons/RegisterForm";

const SignUp = () => {
  const { width } = useMediaQuery();
  const { rolesId } = useGetRole();
  const { values, handleChange, handleSubmit, role, errors } = useForm(
    { ...REGISTER_INITIAL_VALUES, role: rolesId.MENTOR },
    registerUser,
    validationRegister
  );
  const { error } = useAppSelector((state) => state.auth);

  useEffect(() => {}, [rolesId]);

  return width < 1024 ? (
    <form
      onSubmit={handleSubmit}
      className="min-h-100% bg-background relative flex flex-col justify-center items-start"
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
      <RegisterForm
        values={values}
        handleChange={handleChange}
        role={role}
        errors={errors}
        error={error}
      />
    </form>
  ) : (
    <div className="w-[100vw] h-[100vh] bg-background flex justify-center items-center relative z-0">
      <div className="w-container-desktop min-h-[479px] h-auto bg-transparent border-[2px] border-[#444444] rounded-[40px] flex justify-center items-center relative z-10">
        <img
          src={MaskGroup}
          alt="MaskGroup"
          className="w-[228px] absolute left-[5%] top-[0%] translate-x-[-50%] translate-y-[-50%] z-20"
        />
        <img
          src={Logo}
          alt="Logo"
          className="w-[200.62px] absolute top-[-122.83px] left-[50%] xl:left-[50%] translate-x-[-50%] xl:translate-x-0 z-30"
        />
        <div className="hidden xl:block xl:w-[50%] h-[100%] relative">
          {/* <div className="w-[204.46px] h-[204.46px] bg-doodle4 bg-no-repeat bg-contain absolute bottom-[0%] left-[0%] translate-x-[-50%] translate-y-[-50%] z-40"></div> */}
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
        <form
          onSubmit={handleSubmit}
          className="w-[100%] xl:w-[50%] h-[100%] xl:ps-[50px] flex flex-col items-center xl:items-start justify-center relative"
        >
          <p className="w-[162px] mt-[30px] text-title text-[40px] font-extrabold leading-[59px] z-30">
            Sign up
          </p>
          <RegisterForm
            values={values}
            handleChange={handleChange}
            role={role}
            errors={errors}
            error={error}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
