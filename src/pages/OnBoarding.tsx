import Logo from "../assets/img/ThePerfectMentor.svg";
import Ellipse from "../assets/img/Ellipse.svg";
import Doodle from "../assets/img/Doodle.svg";
import Doodle2 from "../assets/img/Doodle2.svg";
import Doodle3 from "../assets/img/Doodle3.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";

const OnBoarding = () => {
  const { width } = useMediaQuery();
  return width < 1024 ? (
    <div className="min-h-100% h-auto bg-background relative">
      <div className="absolute w-[100vw] h-screen bg-saly bg-center bg-no-repeat top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img
          className="absolute w-[200.62px] h-[107.42px] top-[12%] left-[30.68px] z-20"
          src={Logo}
          alt="The Perfect Mentor"
        />
        <img
          className="absolute w-[178.69px] top-[30%] z-10"
          src={Doodle}
          alt="Doodle"
        />
        <img
          className="absolute top-[59px] left-[66px] z-1"
          src={Ellipse}
          alt="Ellipse"
        />
        <img
          className="absolute w-[130.86px] bottom-[20%] left-[104px]"
          src={Doodle2}
          alt="Doodle2"
        />
      </div>
      <Link to="/register">
        <button className="absolute w-button h-[55px] bottom-[136px] fold-horizontal:w-[50%] fold-horizontal:h-[40px] fold-horizontal:bottom-[76px] left-[50%] translate-x-[-50%] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]">
          Sign up
        </button>
      </Link>
      <Link to="/login">
        <button className="absolute w-button h-[55px] bottom-[71px] fold-horizontal:w-[50%] fold-horizontal:h-[40px] fold-horizontal:bottom-[30px] left-[50%] translate-x-[-50%] border-[2px] border-button rounded-[40px] font-bold text-[15px]">
          Log In
        </button>
      </Link>
    </div>
  ) : (
    <div className="w-[100vw] h-[100vh] bg-background flex justify-center items-center relative z-0">
      <div className="w-container-desktop h-[514px] bg-transparent border-[2px] border-[#444444] rounded-[40px] relative z-10">
        <div className="w-[784.44px] h-[784.44px] bg-saly bg-no-repeat bg-center bg-contain absolute left-[23%] top-[48%] translate-x-[-50%] translate-y-[-50%] z-20"></div>
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-end z-20">
          <div className="min-w-[100%] xl:min-w-[385px] h-[100%] flex flex-col items-center xl:items-start justify-center z-30">
            <img src={Logo} alt="Logo" className="w-[248.37px] mb-[47.48px]" />
            <img
              src={Doodle}
              alt="Doodle"
              className="w-[221.08px] absolute left-[1.5%] top-[30%] translate-x-[-50%] translate-y-[-50%]"
            />
            <img
              src={Doodle3}
              alt="Doodle3"
              className="w-[150px] absolute rotate-45 left-[44%] top-[-10%] translate-x-[-50%] translate-y-[-50%]"
            />
            <img
              src={Doodle2}
              alt="Doodle2"
              className="w-[245px] h-[250px] absolute rotate-45 left-[100%] top-[18%] translate-x-[-50%] translate-y-[-50%]"
            />
            <Link to="/register">
              <button className="min-w-[175px] xl:min-w-[315px] h-[55px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff] mb-[15px]">
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button className="min-w-[175px] xl:min-w-[315px] h-[55px] border-[2px] border-button rounded-[40px] font-bold text-[15px]">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
