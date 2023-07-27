import Logo from "../../assets/img/ThePerfectMentor.svg";
import LogOut from "../../assets/img/LogOut.svg";
import Info from "../../assets/img/Navbar/Info.svg";
import InfoDesktop from "../../assets/img/Navbar/InfoDesktop.svg";
import Statics from "../../assets/img/Navbar/Statics.svg";
import StaticsDesktop from "../../assets/img/Navbar/StaticsDesktop.svg";
import User from "../../assets/img/Navbar/User.svg";
import UserDesktop from "../../assets/img/Navbar/UserDesktop.svg";
import Users from "../../assets/img/Navbar/Users.svg";
import UsersActive from "../../assets/img/Navbar/UsersActive.svg";
import Rectangle from "../../assets/img/Navbar/Rectangle.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useLocation } from "react-router-dom";
import { PATH } from "../../constants/path";

const Navbar = () => {
  const { width } = useMediaQuery();
  const { pathname } = useLocation();

  return pathname === PATH.AUTH || PATH.HOME ? null : width < 1024 ? (
    <div className="fixed bottom-[0px] w-[100vw] h-[82px] fold-horizontal:h-[47px] bg-navbar rounded-t-[40px] flex justify-between z-10">
      <img src={UsersActive} alt="UsersActive" className="w-[20px] ms-[67px]" />
      <img src={Statics} alt="Statics" className="w-[20px]" />
      <img src={Info} alt="Info" className="w-[20px]" />
      <img src={User} alt="User" className="w-[20px] me-[67px]" />
    </div>
  ) : (
    <div className="fixed left-[0px] w-[272px] h-[100vh] bg-background flex flex-col items-center justify-between">
      <div className="w-[100%] mt-[81px]">
        <img
          src={Logo}
          alt="Logo"
          className="w-[200.62px] ms-[30px] mb-[35.58px]"
        />
        <div className="w-[100%] h-[71px] bg-button flex items-center justify-start relative">
          <img
            src={UsersActive}
            alt="UsersActive"
            className="w-[20px] ms-[32px]"
          />
          <img
            src={Rectangle}
            alt="Rectangle"
            className="w-auto h-[71px] absolute top-[0%] right-[0%] translatex-[-50%] z-10"
          />
          <p className="w-[55px] text-[#BFD732] text-[16px] ms-[18.23px] font-medium leading-[24px]">
            Users
          </p>
        </div>
        <div className="w-[100%] h-[71px] flex items-center justify-start">
          <img
            src={StaticsDesktop}
            alt="StaticsDesktop"
            className="w-[20px] ms-[32px]"
          />
          <p className="w-[55px] text-[#44444480] text-[16px] ms-[18.23px] font-medium leading-[24px]">
            Stadistics
          </p>
        </div>
        <div className="w-[100%] h-[71px] flex items-center justify-start">
          <img
            src={InfoDesktop}
            alt="InfoDesktop"
            className="w-[20px] ms-[32px]"
          />
          <p className="w-[55px] text-[#44444480] text-[16px] ms-[18.23px] font-medium leading-[24px]">
            Reports
          </p>
        </div>
        <div className="w-[100%] h-[71px] flex items-center justify-start">
          <img
            src={UserDesktop}
            alt="UserDesktop"
            className="w-[20px] ms-[32px]"
          />
          <p className="w-[55px] text-[#44444480] text-[16px] ms-[18.23px] font-medium leading-[24px]">
            Profile
          </p>
        </div>
      </div>
      <div className="w-[100%] h-[71px] mb-[70px] relative flex items-center justify-start">
        <img src={LogOut} alt="LogOut" className="w-[31px] ms-[32px]" />
        <p className="w-[55px] text-[#44444480] text-[16px] ms-[18.23px] font-medium leading-[24px]">
          Log out
        </p>
      </div>
    </div>
  );
};

export default Navbar;
