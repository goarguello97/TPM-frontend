import Logo from "../assets/img/ThePerfectMentor.svg";
import Ellipse from "../assets/img/Ellipse.svg";
import Doodle from "../assets/img/Doodle.svg"
import Doodle2 from "../assets/img/Doodle2.svg"

const OnBoarding = () => {
  return (
    <div className="min-h-100% bg-background relative">
      <div className="absolute w-[100vw] h-[511px] bg-saly bg-center bg-no-repeat top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img
          className="absolute w-[200.62px] h-[107.42px] top-[0px] left-[30.68px] z-10"
          src={Logo}
          alt="The Perfect Mentor"
        />
        <img className="absolute w-[178.69px] top-[84px] z-10" src={Doodle} alt="Doodle" />
        <img
          className="absolute top-[59px] left-[66px] z-1"
          src={Ellipse}
          alt="Ellipse"
        />
        <img className="absolute w-[130.86px] bottom-[18.57px] left-[104px]" src={Doodle2} alt="Doodle2" />
      </div>
      <button className="absolute w-button h-[55px] bottom-[136px] left-[50%] translate-x-[-50%] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]">
        Sign up
      </button>
      <button className="absolute w-button h-[55px] bottom-[71px] left-[50%] translate-x-[-50%] border-[2px] border-button rounded-[40px] font-bold text-[15px]">
        Log In
      </button>
    </div>
  );
};

export default OnBoarding;
