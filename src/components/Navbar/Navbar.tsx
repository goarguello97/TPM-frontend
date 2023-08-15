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
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { PATH } from "../../constants/path";

const Navbar = () => {
  const { width } = useMediaQuery();
  const [styleIcon, setStyleIcon] = useState({
    currentPage: "#BFD732",
    otherPage: "#44444480",
  });
  const [styleButton, setStyleButton] = useState({
    currentPage:
      "w-[100%] h-[71px] bg-button flex items-center justify-start relative",
    otherPage: "w-[100%] h-[71px] flex items-center justify-start",
  });
  const [styleText, setStyleText] = useState({
    currentPage:
      "w-[55px] text-[#BFD732] text-[16px] ms-[18.23px] font-medium leading-[24px]",
    otherPage:
      "w-[55px] text-[#44444480] text-[16px] ms-[18.23px] font-medium leading-[24px]",
  });
  const [styleRectangle, setStyleRectangle] = useState({
    currentPage:
      "w-auto h-[71px] absolute top-[0%] right-[0%] translatex-[-50%] z-10",
    otherPage:
      "w-auto h-[71px] absolute top-[0%] right-[0%] translatex-[-50%] z-10 hidden",
  });

  const { pathname } = useLocation();

  return width < 1024 ? (
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
        <Link to="/users">
          <div
            className={
              pathname === PATH.USERS
                ? styleButton.currentPage
                : styleButton.otherPage
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              fill="none"
              className="ms-[32px] fill-none"
            >
              <path
                fill={
                  pathname === PATH.USERS
                    ? styleIcon.currentPage
                    : styleIcon.otherPage
                }
                d="M19.794 17.126h-2.062v-2.039a.206.206 0 0 0-.206-.203h-1.238a.206.206 0 0 0-.206.204v2.038H14.02a.206.206 0 0 0-.206.204v1.224c0 .112.092.203.206.203h2.062v2.04c0 .111.093.203.206.203h1.238a.206.206 0 0 0 .206-.204v-2.039h2.062a.206.206 0 0 0 .206-.204V17.33a.206.206 0 0 0-.206-.204ZM6.429 10.154a6.415 6.415 0 0 1 .075-1.858.205.205 0 0 0-.117-.224 3.259 3.259 0 0 1-.95-.64A3.218 3.218 0 0 1 4.438 5a3.227 3.227 0 0 1 .935-2.182 3.3 3.3 0 0 1 2.403-.986 3.316 3.316 0 0 1 2.742 1.498.207.207 0 0 0 .24.082 6.46 6.46 0 0 1 1.426-.316.204.204 0 0 0 .162-.296 5.17 5.17 0 0 0-4.529-2.8C4.962-.043 2.58 2.274 2.58 5.098c0 1.6.745 3.027 1.913 3.962a7.751 7.751 0 0 0-2.23 1.54A7.539 7.539 0 0 0 0 15.799a.202.202 0 0 0 .126.193c.026.01.053.016.08.015h1.446c.111 0 .204-.086.207-.196A5.73 5.73 0 0 1 3.578 11.9a5.836 5.836 0 0 1 2.699-1.521.209.209 0 0 0 .152-.224ZM18.04 9.48c0-2.788-2.266-5.054-5.075-5.097C10.11 4.341 7.73 6.657 7.73 9.481c0 1.6.748 3.027 1.913 3.963-.828.38-1.582.9-2.227 1.54a7.537 7.537 0 0 0-2.263 5.195.202.202 0 0 0 .126.193.21.21 0 0 0 .08.016h1.443c.111 0 .204-.086.207-.196a5.73 5.73 0 0 1 1.719-3.912 5.871 5.871 0 0 1 4.158-1.702c2.845 0 5.155-2.281 5.155-5.097Zm-2.822 2.306a3.295 3.295 0 0 1-2.333.956 3.295 3.295 0 0 1-3.056-2.029 3.248 3.248 0 0 1 .692-3.51 3.304 3.304 0 0 1 2.33-.985 3.339 3.339 0 0 1 2.346.933 3.233 3.233 0 0 1 .02 4.636Z"
              />
            </svg>
            <img
              src={Rectangle}
              alt="Rectangle"
              className={
                pathname === PATH.USERS
                  ? styleRectangle.currentPage
                  : styleRectangle.otherPage
              }
            />
            <p
              className={
                pathname === PATH.USERS
                  ? styleText.currentPage
                  : styleText.otherPage
              }
            >
              Users
            </p>
          </div>
        </Link>
        <Link to="/stadistics">
          <div
            className={
              pathname === PATH.STADISTICS
                ? styleButton.currentPage
                : styleButton.otherPage
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="20"
              fill="none"
              className="ms-[32px] fill-none"
            >
              <path
                stroke={
                  pathname === PATH.STADISTICS
                    ? styleIcon.currentPage
                    : styleIcon.otherPage
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 18.216V6.74h4.154v11.477h4.404V1h4.276v17.216h4.273v-4.699H21.9v4.7"
              />
            </svg>
            <img
              src={Rectangle}
              alt="Rectangle"
              className={
                pathname === PATH.STADISTICS
                  ? styleRectangle.currentPage
                  : styleRectangle.otherPage
              }
            />
            <p
              className={
                pathname === PATH.STADISTICS
                  ? styleText.currentPage
                  : styleText.otherPage
              }
            >
              Stadistics
            </p>
          </div>
        </Link>
        <Link to="/reports">
          <div className={
              pathname === PATH.REPORTS
                ? styleButton.currentPage
                : styleButton.otherPage
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              className="ms-[32px] fill-none"
            >
              <path
                stroke={
                  pathname === PATH.REPORTS
                    ? styleIcon.currentPage
                    : styleIcon.otherPage
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.85 5.402h6.025M8.85 9.11h2.06M1 10.375v6.54a4 4 0 0 0 4 4h10.842a4 4 0 0 0 4-4V2a1 1 0 0 0-1-1H6.082a1 1 0 0 0-1 1v14.801"
              />
            </svg>
            <img
              src={Rectangle}
              alt="Rectangle"
              className={
                pathname === PATH.REPORTS
                  ? styleRectangle.currentPage
                  : styleRectangle.otherPage
              }
            />
            <p className={
                pathname === PATH.REPORTS
                  ? styleText.currentPage
                  : styleText.otherPage
              }>
              Reports
            </p>
          </div>
        </Link>
        <Link to="/profile">
          <div className={
              pathname === PATH.PROFILE
                ? styleButton.currentPage
                : styleButton.otherPage
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              className="ms-[32px] fill-none"
            >
              <circle
                cx="9.845"
                cy="5.665"
                r="4.665"
                stroke={
                  pathname === PATH.PROFILE
                    ? styleIcon.currentPage
                    : styleIcon.otherPage
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                stroke={
                  pathname === PATH.PROFILE
                    ? styleIcon.currentPage
                    : styleIcon.otherPage
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.692 20.612v-1.898a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v1.898h9.45"
              />
            </svg>
            <img
              src={Rectangle}
              alt="Rectangle"
              className={
                pathname === PATH.PROFILE
                  ? styleRectangle.currentPage
                  : styleRectangle.otherPage
              }
            />
            <p className={
                pathname === PATH.PROFILE
                  ? styleText.currentPage
                  : styleText.otherPage
              }>
              Profile
            </p>
          </div>
        </Link>
      </div>
      <button className="w-[100%] h-[71px] mb-[70px] relative flex items-center justify-start cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="31"
          className="ms-[32px] fill-none"
        >
          <path
            stroke="#444"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".3"
            strokeWidth="1.5"
            d="M11.496 9.765c.4-4.65 2.79-6.549 8.02-6.549h.169c5.774 0 8.086 2.312 8.086 8.086v8.422c0 5.774-2.313 8.086-8.086 8.086h-.168c-5.193 0-7.582-1.873-8.008-6.446M2.583 15.5H19.22"
          />
          <path
            stroke="#444"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".3"
            strokeWidth="1.5"
            d="m16.34 11.173 4.326 4.327-4.327 4.327"
          />
        </svg>
        <p className="w-[55px] text-[#44444480] text-[16px] ms-[18.23px] font-medium leading-[24px]">
          Log out
        </p>
      </button>
    </div>
  );
};

export default Navbar;
