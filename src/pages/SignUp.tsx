import Logo from "../assets/img/ThePerfectMentor.svg";
import Doodle from "../assets/img/Doodle.svg";
import Doodle2 from "../assets/img/Doodle2.svg";
import Doodle4 from "../assets/img/Doodle4.svg";
import MaskGroup from "../assets/img/MaskGroup.svg";
import Email from "../assets/img/Email.svg";
import Password from "../assets/img/Password.svg";
import User from "../assets/img/User.svg";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineFlag } from "react-icons/ai";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect, useState } from "react";

const SignUp = () => {
  const { width } = useMediaQuery();
  const [page, setPage] = useState(0);
  const formPagesMobile = [
    <>
      <div className="w-input h-[55px] mx-auto mt-[20px] mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="username"
          placeholder="username"
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="email"
          placeholder="email"
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <img
          src={Email}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="password"
          name="password"
          placeholder="password"
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <img
          src={Password}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
    </>,
    <>
      <div className="w-input h-[55px] mx-auto mt-[20px] mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="country"
          placeholder="country"
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <div className="absolute bg-white z-30 w-[32px] h-[32px] rounded-[16px] top-[50%] translate-y-[-50%] left-[11px]">
          <AiOutlineFlag
            strokeWidth={40}
            className="absolute text-title w-[32px] top-[50%] translate-y-[-50%] font-bold"
          />
        </div>
      </div>
    </>,
    <>
      <div className="w-input h-[55px] mx-auto pe-[40px] mt-[20px] mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="date"
          name="dateOfBirth"
          placeholder="dateOfBirth"
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <div className="absolute bg-white z-30 w-[32px] h-[32px] rounded-[16px] top-[50%] translate-y-[-50%] left-[11px]">
          <CiCalendarDate
            strokeWidth={1}
            className="absolute text-title w-[32px] top-[50%] translate-y-[-50%] font-bold"
          />
        </div>
      </div>
      <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative flex justify-start items-center">
        <div className="ps-[53px] me-[10px] flex justify-center items-center">
          <label htmlFor="Mentor" className="me-[10px]">
            Mentor
          </label>
          <input type="radio" name="role" value="Mentor" />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="Mentee" className="me-[10px]">
            Mentee
          </label>
          <input type="radio" name="role" value="Mentee" checked />
        </div>
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
    </>,
  ];
  const formPages = [
    <>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="username"
          placeholder="username"
          className="bg-transparent w-input h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="email"
          placeholder="email"
          className="bg-transparent w-input h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <img
          src={Email}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="password"
          name="password"
          placeholder="password"
          className="bg-transparent w-input h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <img
          src={Password}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
    </>,
    <>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="bg-transparent w-input h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          className="bg-transparent w-input h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="country"
          placeholder="country"
          className="bg-transparent w-input h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <div className="absolute bg-white z-30 w-[32px] h-[32px] rounded-[16px] top-[50%] translate-y-[-50%] left-[11px]">
          <AiOutlineFlag
            strokeWidth={40}
            className="absolute text-title w-[32px] top-[50%] translate-y-[-50%] font-bold"
          />
        </div>
      </div>
    </>,
    <>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="date"
          name="dateOfBirth"
          placeholder="dateOfBirth"
          className="bg-transparent w-input h-[100%] placeholder-title focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
        />
        <div className="absolute bg-white z-30 w-[32px] h-[32px] rounded-[16px] top-[50%] translate-y-[-50%] left-[11px]">
          <CiCalendarDate
            strokeWidth={1}
            className="absolute text-title w-[32px] top-[50%] translate-y-[-50%] font-bold"
          />
        </div>
      </div>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative flex justify-start items-center">
        <div className="ps-[53px] me-[10px] flex justify-center items-center">
          <label htmlFor="Mentor" className="me-[10px]">
            Mentor
          </label>
          <input type="radio" name="role" value="Mentor" />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="Mentee" className="me-[10px]">
            Mentee
          </label>
          <input type="radio" name="role" value="Mentee" checked />
        </div>
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
    </>,
  ];

  let itemsMobile = [];
  let items = [];
  for (let number = 1; number <= Math.ceil(8 / 3); number++) {
    if (number < 3) {
      items.push(
        <button
          onClick={(e) => {
            e.preventDefault();
            setPage(page + 1);
          }}
          className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mt-[30px] mb-[80px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
        >
          Next
        </button>
      );
      itemsMobile.push(
        <button
          onClick={(e) => {
            e.preventDefault();
            setPage(page + 1);
          }}
          className="w-button h-[55px] mx-auto fold-horizontal:mb-[30px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
        >
          Next
        </button>
      );
    } else {
      items.push(
        <button
          type="submit"
          className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mt-[30px] mb-[80px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
        >
          Sign Up
        </button>
      );
      itemsMobile.push(
        <button
          type="submit"
          className="w-button h-[55px] mx-auto fold-horizontal:mb-[30px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
        >
          Sign Up
        </button>
      );
    }
  }

  useEffect(() => {}, [page]);

  console.log(page);
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
        className="w-[200.62px] ml-[30px] fold-horizontal:mt-[30px] z-10"
        src={Logo}
        alt="The Perfect Mentor"
      />
      <div className="bg-background w-sign-in h-[361px] border-[2px] mt-[20.58px] mb-[25px] mx-auto border-button rounded-[40px] z-10 flex flex-col ">
        <p className="text-title font-bold text-[30px] ms-[25px] mt-[30px] mb-[12px]">
          Sign in
        </p>
        <div className="w-line border-dashed border-b-2 border-border mx-auto"></div>

        {/* <div className="w-input h-[55px] mx-auto mt-[20px] mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
          <input
            type="text"
            name="username"
            placeholder="username"
            className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          />
          <img
            src={User}
            alt=""
            className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
          />
        </div>
        <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
          <input
            type="text"
            name="email"
            placeholder="email"
            className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          />
          <img
            src={Email}
            alt=""
            className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
          />
        </div>
        <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
          <input
            type="password"
            name="password"
            placeholder="password"
            className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          />
          <img
            src={Password}
            alt=""
            className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
          />
        </div> */}
        {formPagesMobile[page]}
      </div>
      {itemsMobile[page]}
      {/* <button
        type="submit"
        className="w-button h-[55px] mx-auto fold-horizontal:mb-[30px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
      >
        Sign up
      </button> */}
    </form>
  ) : (
    <div className="w-[100vw] h-[100vh] bg-background flex justify-center items-center relative z-0">
      <div className="w-container-desktop h-[479px] bg-transparent border-[2px] border-[#444444] rounded-[40px] flex justify-center items-center relative z-10">
        <img
          src={MaskGroup}
          alt="MaskGroup"
          className="w-[228px] absolute left-[5%] top-[0%] translate-x-[-50%] translate-y-[-50%] z-20"
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
        <form className="w-[100%] xl:w-[50%] h-[100%] xl:ps-[50px] flex flex-col items-center xl:items-start justify-center relative">
          <img
            src={Logo}
            alt="Logo"
            className="w-[200.62px] absolute top-[-132.83px] left-[50%] xl:left-[50px] translate-x-[-50%] xl:translate-x-0 z-30"
          />
          <p className="w-[162px] mt-[30px] text-title text-[40px] font-extrabold leading-[59px] z-30">
            Sign up
          </p>
          <div className="w-input desktop:w-input-desktop max-w-[323px] h-[0px] border-b-[1px] border-title border-dashed mt-[10px] mb-[30px]"></div>
          {/* <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
            <input
              type="text"
              name="username"
              placeholder="username"
              className="bg-transparent w-input h-[100%] placeholder-title ps-[53px]"
            />
            <img
              src={User}
              alt=""
              className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
            />
          </div>
          <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
            <input
              type="text"
              name="email"
              placeholder="email"
              className="bg-transparent w-input h-[100%] placeholder-title  ps-[53px]"
            />
            <img
              src={Email}
              alt=""
              className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
            />
          </div>
          <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] bg-transparent border-[1px] border-border rounded-[40px] relative">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="bg-transparent w-input h-[100%] placeholder-title  ps-[53px]"
            />
            <img
              src={Password}
              alt=""
              className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
            />
          </div> */}
          {formPages[page]}

          {items[page]}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
