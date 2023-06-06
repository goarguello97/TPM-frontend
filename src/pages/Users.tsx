import Doodle from "../assets/img/Doodle.svg";
import Doodle3 from "../assets/img/Doodle3.svg";
import MagGlass from "../assets/img/MagGlass.svg";
import X from "../assets/img/X.svg";
import Unverified from "../assets/img/Unverified.svg";
import Verified from "../assets/img/Verified.svg";
import Edit from "../assets/img/Edit.svg";
import useMediaQuery from "../hooks/useMediaQuery";

const Users = () => {
  const { width } = useMediaQuery();
  return width < 1024 ? (
    <div className="h-[100vh] bg-[#F5F6F7] relative">
      <div className="w-[100vw] h-[137px] fold-horizontal:h-[90px] bg-background top-0 rounded-br-[45px] absolute flex flex-col">
        <p className="text-title text-[30px] fold-horizontal:text-[20px] font-extrabold ms-[30px] mt-[37px] fold-horizontal:mt-[10px] mb-[0px] leading-[44px] fold-horizontal:leading-[25px]">
          Users
        </p>
        <p className="text-title text-[14px] fold-horizontal:text-[10px] font-normal ms-[30px] mb-[35px] leading-[21px]">
          View all the users
        </p>
        <img
          src={Doodle}
          alt="Doodle"
          className="w-[134.85px] absolute top-[-30px] right-[60px] z-9"
        />
        <img
          src={Doodle3}
          alt="Doodle3"
          className="w-[225px] absolute top-[0px] right-[0px] z-9"
        />
      </div>

      {/* Input para buscar usuarios */}
      <form className="w-input-search h-[55px] absolute top-[107px] fold-horizontal:top-[60px] left-[50%] translate-x-[-50%] z-10">
        <img
          src={MagGlass}
          alt="MagGlass"
          className="w-[20px] absolute left-[14.39px] top-[15px]"
        />
        <input
          type="search"
          name="search"
          placeholder="search for users"
          className="w-[100%] h-[100%] ps-[49px] rounded-[40px] placeholder-title"
        />
      </form>

      {/* Contenedor Principal */}
      <div className="w-container min-h-container max-h-container fold-horizontal:min-h-fold fold-horizontal:max-h-fold absolute bg-[#FFFFFF] rounded-t-[40px] shadow-container left-[50%] bottom-[0px] translate-x-[-50%] flex flex-col justify-start items-center pb-[272px] shadow:pb-[82px] z-9 overflow-y-scroll">
        {/* Filtro */}
        <div className="flex w-filter items-center justify-between h-[50px] bg-[#F5F6F7] rounded-[40px] mt-[10px] mb-[10px]">
          <p className="text-[15px] font-bold ms-[20px]">Filters</p>
          <div className="flex">
            <button className="w-auto default:min-w-button-filter fold:w-[50px] h-[40px] border-[1px] rounded-[40px] text-filter font-bold">
              Age
            </button>
            <button className="w-auto default:min-w-button-filter fold:w-[80px] h-[40px] rounded-[40px] bg-button text-[#DADADA] flex items-center justify-center ms-[10px] me-[5px]">
              Status <img src={X} alt="x" className="ms-[7px]" />
            </button>
          </div>
        </div>

        {/* Tarjetas de personas */}
        {/* No verificado */}
        <div className="w-person h-[102px] min-h-[102px] bg-unverified rounded-[20px] flex flex-col ps-[19px] justify-center relative mb-[5px]">
          <div className="flex bg-bg-unverified default:text-[12px] fold:text-[9px] text-[#E61587] default:w-[82px] fold:w-[62px] h-[18px] rounded-[40px] justify-center items-center absolute right-[15px] top-[15px]">
            Unverified
            <img
              src={Unverified}
              alt="Unverified"
              className="ms-[5px] w-[6px]"
            />
          </div>
          <img
            src={Edit}
            alt="Edit"
            className="absolute w-[32px] right-[15px] top-[65%] translate-y-[-50%]"
          />
          <p className="font-bold default:text-[14px] fold:text-[11px]">
            Michael David | age 25 <br />
            Email: <span className="font-normal">ma.da@gmail.com</span> <br />
            Role: <span className="font-normal">Mentor</span> <br />
            Joined Date: <span className="font-normal">Jan 13, 2022</span>
          </p>
          <div className="absolute w-[4px] h-[60px] bg-bar-unverified rounded-tr-[10px] rounded-br-[10px] left-[0px] top-[50%] translate-y-[-50%]"></div>
        </div>
        {/* Verificado */}
        <div className="w-person h-[102px] min-h-[102px] bg-verified rounded-[20px] flex flex-col ps-[19px] justify-center relative mb-[5px]">
          <div className="flex bg-bg-verified default:text-[12px] fold:text-[9px] text-[#39B54A] default:w-[82px] fold:w-[62px] h-[18px] rounded-[40px] justify-center items-center absolute right-[15px] top-[15px]">
            Verified
            <img src={Verified} alt="Verified" className="ms-[5px] w-[6px]" />
          </div>
          <img
            src={Edit}
            alt="Edit"
            className="absolute w-[32px] right-[15px] top-[65%] translate-y-[-50%]"
          />
          <p className="font-bold default:text-[14px] fold:text-[11px]">
            Micaela Tamos | age 30 <br />
            Email: <span className="font-normal">micatamos@gmail.com</span>{" "}
            <br />
            Role: <span className="font-normal">Mentor</span> <br />
            Joined Date: <span className="font-normal">Jan 13, 2022</span>
          </p>
          <div className="absolute w-[4px] h-[60px] bg-bar-verified rounded-tr-[10px] rounded-br-[10px] left-[0px] top-[50%] translate-y-[-50%]"></div>
        </div>
        {/* Ejemplos */}
        <div className="w-person h-[102px] min-h-[102px] bg-verified rounded-[20px] flex flex-col ps-[19px] justify-center relative mb-[5px]">
          <div className="flex bg-bg-verified default:text-[12px] fold:text-[9px] text-[#39B54A] default:w-[82px] fold:w-[62px] h-[18px] rounded-[40px] justify-center items-center absolute right-[15px] top-[15px]">
            Verified
            <img src={Verified} alt="Verified" className="ms-[5px] w-[6px]" />
          </div>
          <img
            src={Edit}
            alt="Edit"
            className="absolute w-[32px] right-[15px] top-[65%] translate-y-[-50%]"
          />
          <p className="font-bold default:text-[14px] fold:text-[11px]">
            Amanda Levete | age 22 <br />
            Email: <span className="font-normal">
              ama_levete@gmail.com
            </span>{" "}
            <br />
            Role: <span className="font-normal">Mentee</span> <br />
            Joined Date: <span className="font-normal">Jan 13, 2022</span>
          </p>
          <div className="absolute w-[4px] h-[60px] bg-bar-verified rounded-tr-[10px] rounded-br-[10px] left-[0px] top-[50%] translate-y-[-50%]"></div>
        </div>
        <div className="w-person h-[102px] min-h-[102px] bg-unverified rounded-[20px] flex flex-col ps-[19px] justify-center relative mb-[5px]">
          <div className="flex bg-bg-unverified default:text-[12px] fold:text-[9px] text-[#E61587] default:w-[82px] fold:w-[62px] h-[18px] rounded-[40px] justify-center items-center absolute right-[15px] top-[15px]">
            Unverified
            <img
              src={Unverified}
              alt="Unverified"
              className="ms-[5px] w-[6px]"
            />
          </div>
          <img
            src={Edit}
            alt="Edit"
            className="absolute w-[32px] right-[15px] top-[65%] translate-y-[-50%]"
          />
          <p className="font-bold default:text-[14px] fold:text-[11px]">
            Franco González | age 33 <br />
            Email: <span className="font-normal">frango@gmail.com</span> <br />
            Role: <span className="font-normal">Mentor</span> <br />
            Joined Date: <span className="font-normal">Jan 13, 2022</span>
          </p>
          <div className="absolute w-[4px] h-[60px] bg-bar-unverified rounded-tr-[10px] rounded-br-[10px] left-[0px] top-[50%] translate-y-[-50%]"></div>
        </div>
        <div className="w-person h-[102px] min-h-[102px] bg-verified rounded-[20px] flex flex-col ps-[19px] justify-center relative mb-[5px]">
          <div className="flex bg-bg-verified default:text-[12px] fold:text-[9px] text-[#39B54A] default:w-[82px] fold:w-[62px] h-[18px] rounded-[40px] justify-center items-center absolute right-[15px] top-[15px]">
            Verified
            <img src={Verified} alt="Verified" className="ms-[5px] w-[6px]" />
          </div>
          <img
            src={Edit}
            alt="Edit"
            className="absolute w-[32px] right-[15px] top-[65%] translate-y-[-50%]"
          />
          <p className="font-bold default:text-[14px] fold:text-[11px]">
            Amanda Levete | age 22 <br />
            Email: <span className="font-normal">
              ama_levete@gmail.com
            </span>{" "}
            <br />
            Role: <span className="font-normal">Mentee</span> <br />
            Joined Date: <span className="font-normal">Jan 13, 2022</span>
          </p>
          <div className="absolute w-[4px] h-[60px] bg-bar-verified rounded-tr-[10px] rounded-br-[10px] left-[0px] top-[50%] translate-y-[-50%]"></div>
        </div>
        <div className="w-person h-[102px] min-h-[102px] bg-verified rounded-[20px] flex flex-col ps-[19px] justify-center relative mb-[5px]">
          <div className="flex bg-bg-verified default:text-[12px] fold:text-[9px] text-[#39B54A] default:w-[82px] fold:w-[62px] h-[18px] rounded-[40px] justify-center items-center absolute right-[15px] top-[15px]">
            Verified
            <img src={Verified} alt="Verified" className="ms-[5px] w-[6px]" />
          </div>
          <img
            src={Edit}
            alt="Edit"
            className="absolute w-[32px] right-[15px] top-[65%] translate-y-[-50%]"
          />
          <p className="font-bold default:text-[14px] fold:text-[11px]">
            Amanda Levete | age 22 <br />
            Email: <span className="font-normal">
              ama_levete@gmail.com
            </span>{" "}
            <br />
            Role: <span className="font-normal">Mentee</span> <br />
            Joined Date: <span className="font-normal">Jan 13, 2022</span>
          </p>
          <div className="absolute w-[4px] h-[60px] bg-bar-verified rounded-tr-[10px] rounded-br-[10px] left-[0px] top-[50%] translate-y-[-50%]"></div>
        </div>
        <div className="w-person h-[102px] min-h-[102px] bg-verified rounded-[20px] flex flex-col ps-[19px] justify-center relative mb-[5px]">
          <div className="flex bg-bg-verified default:text-[12px] fold:text-[9px] text-[#39B54A] default:w-[82px] fold:w-[62px] h-[18px] rounded-[40px] justify-center items-center absolute right-[15px] top-[15px]">
            Verified
            <img src={Verified} alt="Verified" className="ms-[5px] w-[6px]" />
          </div>
          <img
            src={Edit}
            alt="Edit"
            className="absolute w-[32px] right-[15px] top-[65%] translate-y-[-50%]"
          />
          <p className="font-bold default:text-[14px] fold:text-[11px]">
            Amanda Levete | age 22 <br />
            Email: <span className="font-normal">
              ama_levete@gmail.com
            </span>{" "}
            <br />
            Role: <span className="font-normal">Mentee</span> <br />
            Joined Date: <span className="font-normal">Jan 13, 2022</span>
          </p>
          <div className="absolute w-[4px] h-[60px] bg-bar-verified rounded-tr-[10px] rounded-br-[10px] left-[0px] top-[50%] translate-y-[-50%]"></div>
        </div>
        <div className="w-person h-[102px] min-h-[102px] bg-verified rounded-[20px] flex flex-col ps-[19px] justify-center relative mb-[5px]">
          <div className="flex bg-bg-verified default:text-[12px] fold:text-[9px] text-[#39B54A] default:w-[82px] fold:w-[62px] h-[18px] rounded-[40px] justify-center items-center absolute right-[15px] top-[15px]">
            Verified
            <img src={Verified} alt="Verified" className="ms-[5px] w-[6px]" />
          </div>
          <img
            src={Edit}
            alt="Edit"
            className="absolute w-[32px] right-[15px] top-[65%] translate-y-[-50%]"
          />
          <p className="font-bold default:text-[14px] fold:text-[11px]">
            Amanda Levete | age 22 <br />
            Email: <span className="font-normal">
              ama_levete@gmail.com
            </span>{" "}
            <br />
            Role: <span className="font-normal">Mentee</span> <br />
            Joined Date: <span className="font-normal">Jan 13, 2022</span>
          </p>
          <div className="absolute w-[4px] h-[60px] bg-bar-verified rounded-tr-[10px] rounded-br-[10px] left-[0px] top-[50%] translate-y-[-50%]"></div>
        </div>
      </div>

      {/* Esto es una sombra */}
      <div className="w-shadow h-[196px] bg-gradient-to-t from-[#FFFFFF] absolute bottom-[-30px] left-[50%] translate-x-[-50%] translate-y-[-50%] z-9 shadow:hidden "></div>
    </div>
  ) : (
    <div className="w-[100vw] h-[100vh] bg-background ps-[272px] flex items-center">
      <div className="w-container-desktop-2 h-container-desktop-2 bg-white rounded-[35px] shadow-container-desktop-2"></div>
    </div>
  );
};

export default Users;
