import Logo from "../assets/img/ThePerfectMentor.svg";
import Doodle from "../assets/img/Doodle.svg";
import Doodle2 from "../assets/img/Doodle2.svg";
import Email from "../assets/img/Email.svg";
import Password from "../assets/img/Password.svg";
import User from "../assets/img/User.svg"

const SignUp = () => {
  return (
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
  )
}

export default SignUp