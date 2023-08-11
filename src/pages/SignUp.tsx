import Logo from "../assets/img/ThePerfectMentor.svg";
import Doodle from "../assets/img/Doodle.svg";
import Doodle2 from "../assets/img/Doodle2.svg";
import Doodle4 from "../assets/img/Doodle4.svg";
import MaskGroup from "../assets/img/MaskGroup.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect } from "react";
import useGetRole from "../hooks/useGetRole";
import RegisterForm from "../commons/RegisterForm";

const SignUp = () => {
  const { width } = useMediaQuery();
  const { rolesId } = useGetRole();

  useEffect(() => {}, [rolesId]);

  return width < 1024 ? (
    <RegisterForm />
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

        <RegisterForm />
      </div>
    </div>
  );
};

export default SignUp;
