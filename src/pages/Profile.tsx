import { useState } from "react";
import Edit from "../assets/img/Edit.svg";
import Eye from "../assets/img/Eye.svg";

const Profile = () => {
  const [show, setShow] = useState("password");

  const togglePassword = () => {
    if (show === "password") {
      setShow("text");
    } else {
      setShow("password");
    }
  };

  return (
    <div className="h-[100vh] bg-[#F5F6F7] relative">
      <div className="w-[100vw] h-[229px] fold-horizontal:h-[90px] bg-background top-0 rounded-br-[45px] absolute flex flex-col">
        <p className="h-[34px] text-title text-[30px] font-extrabold leading-[44px] ms-[30px] mt-[44px]">
          Profile
        </p>
        <img
          src={Edit}
          alt="Edit"
          className="w-[32px] absolute top-[48px] left-[137px]"
        />
      </div>
      <div className="w-container min-h-container-profile h-auto bg-[#FFFFFF] absolute left-[50%] bottom-[0px] translate-x-[-50%] rounded-t-[40px]">
        <div className="w-[136px] h-[136px] bg-[#94F0F0] bg-[url(/src/assets/img/Profile-Img.png)] rounded-[50%] absolute top-[3%] right-[21px] translate-y-[-50%]"></div>
        <form className="w-[100%] h-auto pt-[100px] flex flex-col items-center">
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Your name
          </label>
          <input
            type="text"
            name="name"
            value="David Gordon"
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Your email
          </label>
          <input
            type="text"
            name="email"
            value="davidgordon@gmail.com"
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Your passwrd
          </label>
          <input
            type={show}
            name="password"
            value="Password"
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px] relative">
            <img
              src={Eye}
              alt="Eye"
              className="w-[12.67px] absolute bottom-[13.33px] right-[5px] cursor-pointer"
              onClick={togglePassword}
            />
          </div>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Age
          </label>
          <input
            type="text"
            name="age"
            value="35"
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Role
          </label>
          <input
            type="text"
            name="Role"
            value="Mentor"
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
