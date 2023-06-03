import Info from "../../assets/img/Navbar/Info.svg";
import Statics from "../../assets/img/Navbar/Statics.svg";
import User from "../../assets/img/Navbar/User.svg";
import Users from "../../assets/img/Navbar/Users.svg";
import UsersActive from "../../assets/img/Navbar/UsersActive.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

const Navbar = () => {
  const { width } = useMediaQuery();
  return width < 1024 ? (
    <div className="fixed bottom-[0px] w-[100vw] h-[82px] fold-horizontal:h-[47px] bg-navbar rounded-t-[40px] flex justify-between z-10">
      <img src={UsersActive} alt="UsersActive" className="w-[20px] ms-[67px]" />
      <img src={Statics} alt="Statics" className="w-[20px]" />
      <img src={Info} alt="Info" className="w-[20px]" />
      <img src={User} alt="User" className="w-[20px] me-[67px]" />
    </div>
  ) : null;
};

export default Navbar;
