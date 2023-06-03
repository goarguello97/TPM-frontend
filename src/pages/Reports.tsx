import Saly2 from "../assets/img/Saly2.svg";
import MagGlass from "../assets/img/MagGlass.svg";
import Unverified from "../assets/img/Unverified.svg";
import Verified from "../assets/img/Verified.svg";

const Reports = () => {
  return (
    <div className="h-[100vh] bg-[#F5F6F7] relative">
      <div className="w-[100vw] h-[137px] fold-horizontal:h-[90px] bg-background top-0 rounded-br-[45px] absolute flex flex-col">
        <p className="text-title text-[30px] fold-horizontal:text-[20px] font-extrabold h-[30px] ms-[30px] mt-[37px] mb-[5px] fold-horizontal:mt-[10px] leading-[44px] fold-horizontal:leading-[25px] z-10">
          Reports
        </p>
        <p className="text-title text-[14px] fold-horizontal:text-[10px] font-normal h-[21px] ms-[30px] mb-[35px] leading-[21px] z-10">
          Check the reports of the users
        </p>
        <img
          src={Saly2}
          alt="Saly2"
          className="w-[191.14px] absolute bottom-[0px] right-[9.86px]"
        />
      </div>

      {/* Input para buscar por id */}
      <form className="w-input-search h-[55px] absolute top-[107px] fold-horizontal:top-[60px] left-[50%] translate-x-[-50%] z-10">
        <img
          src={MagGlass}
          alt="MagGlass"
          className="w-[20px] absolute left-[14.39px] top-[15px]"
        />
        <input
          type="search"
          name="search"
          placeholder="search for id"
          className="w-[100%] h-[100%] ps-[49px] rounded-[40px] placeholder-title"
        />
      </form>

      {/* Contenedor Principal */}
      <div className="w-container min-h-container max-h-container fold-horizontal:min-h-fold fold-horizontal:max-h-fold absolute bg-[#FFFFFF] rounded-t-[40px] shadow-container left-[50%] bottom-[0px] translate-x-[-50%] flex flex-col justify-start items-center pt-[20px] pb-[272px] shadow:pb-[82px] z-9 overflow-y-scroll">
        {/* Tajetas */}

        {/* No answer */}
        <div className="w-container-2 h-[119px] min-h-[119px] bg-unverified rounded-[20px] relative flex flex-col justify-center mb-[5px]">
          <div className="flex bg-bg-unverified default:text-[12px] fold:text-[9px] text-[#E61587] default:w-[82px] fold:w-[62px] h-[30px] ps-[12px] rounded-[40px] leading-[10px] justify-start items-center absolute right-[15px] top-[50%] fold:top-[25%] translate-y-[-50%]">
            No <br /> answer
            <img
              src={Unverified}
              alt="Unverified"
              className="absolute right-[7px] w-[6px]"
            />
          </div>
          <p className="font-bold default:text-[14px] fold:text-[11px] ms-[19px] leading-[17px]">
            Michael David
            <br />
            Role: <span className="font-normal">Mentor</span> <br />
            Reason: <span className="font-normal">
              Upload my information
            </span>{" "}
            <br />
            Email: <span className="font-normal">ma.da@gmail.com</span> <br />
            Joined Date: <span className="font-normal">Jan 13, 2022</span>
          </p>
          <div className="absolute w-[4px] h-[77px] bg-bar-unverified rounded-tr-[10px] rounded-br-[10px] left-[0px] top-[50%] translate-y-[-50%]"></div>
        </div>

        {/* Check it*/}
        <div className="w-container-2 h-[119px] min-h-[119px] bg-verified rounded-[20px] relative flex flex-col justify-center mb-[5px]">
          <div className="flex bg-bg-verified default:text-[12px] fold:text-[9px] text-[#39B54A] default:w-[82px] fold:w-[62px] h-[20px] ps-[12px] rounded-[40px] leading-[10px] justify-start items-center absolute right-[15px] top-[50%] fold:top-[25%] translate-y-[-50%]">
            Check it
            <img
              src={Verified}
              alt="Verified"
              className="absolute right-[7px] w-[6px]"
            />
          </div>
          <p className="font-bold default:text-[14px] fold:text-[11px] ms-[19px] leading-[17px]">
            Micaela Tamos
            <br />
            Role: <span className="font-normal">Mentor</span> <br />
            Reason: <span className="font-normal">Other</span> <br />
            Email: <span className="font-normal">micatamos@gmail.com</span>{" "}
            <br />
            Joined Date: <span className="font-normal">Jan 13, 2022</span>
          </p>
          <div className="absolute w-[4px] h-[77px] bg-bar-verified rounded-tr-[10px] rounded-br-[10px] left-[0px] top-[50%] translate-y-[-50%]"></div>
        </div>
      </div>

      {/* Esto es una sombra */}
      <div className="w-shadow h-[196px] bg-gradient-to-t from-[#FFFFFF] absolute bottom-[-30px] left-[50%] translate-x-[-50%] translate-y-[-50%] z-9 shadow:hidden"></div>
    </div>
  );
};

export default Reports;
