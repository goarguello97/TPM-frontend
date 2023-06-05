import Logo from "../assets/img/ThePerfectMentor.svg";
import Doodle from "../assets/img/Doodle.svg";
import Doodle2 from "../assets/img/Doodle2.svg";
import Doodle3 from "../assets/img/Doodle3.svg";
import MaskGroup from "../assets/img/MaskGroup.svg";
import Email from "../assets/img/Email.svg";
import Password from "../assets/img/Password.svg";
import User from "../assets/img/User.svg";
import useMediaQuery from "../hooks/useMediaQuery";

const SignUp = () => {
  const { width } = useMediaQuery();
  return width < 1024 ? (
    <form className="min-h-100% bg-background relative flex flex-col justify-center items-start">
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
        className="w-[200.62px] ml-[30px] z-10"
        src={Logo}
        alt="The Perfect Mentor"
      />
      <div className="bg-background w-sign-in h-[361px] border-[2px] mt-[20.58px] mb-[25px] mx-auto border-button rounded-[40px] z-10 flex flex-col ">
        <p className="text-title font-bold text-[30px] ms-[25px] mt-[30px] mb-[12px]">
          Sign in
        </p>
        <div className="w-line border-dashed border-b-2 border-border mx-auto"></div>

        <div className="w-input h-[55px] mx-auto mt-[20px] mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
          <input
            type="text"
            name="username"
            placeholder="username"
            className="bg-transparent w-[100%] h-[100%] placeholder-title  ps-[53px]"
          />
          <img
            src={User}
            alt=""
            className="absolute w-[32px] top-[12px] left-[11px]"
          />
        </div>
        <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
          <input
            type="text"
            name="email"
            placeholder="email"
            className="bg-transparent w-[100%] h-[100%] placeholder-title  ps-[53px]"
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
            placeholder="password"
            className="bg-transparent w-[100%] h-[100%] placeholder-title  ps-[53px]"
          />
          <img
            src={Password}
            alt=""
            className="absolute w-[32px] top-[12px] left-[11px]"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-button h-[55px] mx-auto bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
      >
        Sign up
      </button>
    </form>
  ) : (
    <div className="w-[100vw] h-[100vh] bg-background flex justify-center items-center relative z-0">
      <div className="w-container-desktop h-[479px] bg-transparent border-[2px] border-[#444444] rounded-[40px] flex justify-center items-center relative z-10">
        <img
          src={MaskGroup}
          alt="MaskGroup"
          className="w-[228px] absolute left-[5%] top-[0%] translate-x-[-50%] translate-y-[-50%] z-20"
        />

        <img
          src={Logo}
          alt="Logo"
          className="w-[200.62px] absolute top-[-132.83px] right-[10%] translate-x-[-50%]"
        />
        <div className="w-[443px] h-[100%]">
          <div className="w-[572px] h-[572px] bg-saly3 bg-no-repeat bg-contain absolute left-[25%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
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
            <div className="w-[204.46px] h-[204.46px] bg-doodle3 bg-no-repeat bg-contain absolute bottom-[0%] left-[0%] translate-x-[-50%] translate-y-[-50%] z-40"></div>
            
          </div>
        </div>
        <div className="w-0 h-[416px] border-title border-[1px]"></div>
        <form className="w-[443px] h-[100%] flex flex-col items-start justify-center">
          <p className="w-[162px] ms-[50px] me-[231px] mt-[30px] text-title text-[40px] font-extrabold leading-[59px]">
            Sign up
          </p>
          <div className="w-hr2 h-[0px] border-b-[1px] border-title border-dashed ms-[50px] mt-[10px] mb-[30px]"></div>
          <div className="w-input2 h-[55px] ms-[50px] mt-[20px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
            <input
              type="text"
              name="username"
              placeholder="username"
              className="bg-transparent w-[100%] h-[100%] placeholder-title ps-[53px]"
            />
            <img
              src={User}
              alt=""
              className="absolute w-[32px] top-[7px] left-[11px]"
            />
          </div>
          <div className="w-input2 h-[55px] ms-[50px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
            <input
              type="text"
              name="email"
              placeholder="email"
              className="bg-transparent w-[100%] h-[100%] placeholder-title  ps-[53px]"
            />
            <img
              src={Email}
              alt=""
              className="absolute w-[32px] top-[7px] left-[11px]"
            />
          </div>
          <div className="w-input2 h-[55px] ms-[50px] bg-transparent border-[1px] border-border rounded-[40px] relative">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="bg-transparent w-[100%] h-[100%] placeholder-title  ps-[53px]"
            />
            <img
              src={Password}
              alt=""
              className="absolute w-[32px] top-[7px] left-[11px]"
            />
          </div>
          <button
            type="submit"
            className="w-input2 h-[55px] ms-[50px] mt-[30px] mb-[80px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
