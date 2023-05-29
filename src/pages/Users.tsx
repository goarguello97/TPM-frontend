import MagGlass from "../assets/img/MagGlass.svg";
import X from "../assets/img/X.svg";

const Users = () => {
  return (
    <div className="h-[100vh] bg-[#F5F6F7] relative">
      <div className="w-[100vw] h-[137px] bg-background top-0 rounded-br-[45px] absolute flex flex-col">
        <p className="text-title text-[30px] font-extrabold ms-[30px] mt-[37px] mb-[0px] leading-[44px]">
          Users
        </p>
        <p className="text-title text-[14px] font-normal ms-[30px] mb-[35px] leading-[21px]">
          View all the users
        </p>
      </div>

      {/* Input para buscar usuarios */}
      <form className="w-input-search h-[55px] absolute top-[107px] left-[50%] translate-x-[-50%] ">
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
      <div className="w-container min-h-container h-auto absolute bg-[#FFFFFF] rounded-t-[40px] shadow-container left-[50%] bottom-[0px] translate-x-[-50%] flex flex-col justify-start items-center z-8">
        {/* Filtro */}
        <div className="flex w-filter items-center justify-between h-[50px] bg-[#F5F6F7] rounded-[40px] mt-[10px]">
          <p className="text-[15px] font-bold ms-[20px]">Filters</p>
          <div className="flex">
            <button className="w-auto default:min-w-button-filter fold:w-[35px] h-[40px] border-[1px] rounded-[40px] text-filter font-bold">
              Age
            </button>
            <button className="w-auto default:min-w-button-filter fold:w-[80px] h-[40px] rounded-[40px] bg-button text-[#DADADA] flex items-center justify-center ms-[10px] me-[5px]">
              Status <img src={X} alt="x" className="ms-[7px]" />
            </button>
          </div>
        </div>

        {/* Tarjetas de personas */}
      
      </div>

      {/* Esto es una sombra */}
      <div className="w-shadow h-[196px] bg-gradient-to-t from-[#FFFFFF] absolute bottom-[-30px] left-[50%] translate-x-[-50%] translate-y-[-50%] z-9"></div>
    </div>
  );
};

export default Users;
