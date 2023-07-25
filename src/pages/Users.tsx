import Doodle from "../assets/img/Doodle.svg";
import Doodle3 from "../assets/img/Doodle3.svg";
import MagGlass from "../assets/img/MagGlass.svg";
import X from "../assets/img/X.svg";
import Unverified from "../assets/img/Unverified.svg";
import Verified from "../assets/img/Verified.svg";
import Edit from "../assets/img/Edit.svg";
import Dots from "../assets/img/Dots.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import RowTable from "../commons/RowTable";

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
          <div className="flex bg-bg-verified max-h-[55.63px] default:text-[12px] fold:text-[9px] text-[#39B54A] default:w-[82px] fold:w-[62px] h-[18px] rounded-[40px] justify-center items-center absolute right-[15px] top-[15px]">
            Verified
            <img src={Verified} alt="Verified" className="ms-[5px] w-[6px]" />
          </div>
          <img
            src={Edit}
            alt="Edit"
            className="absolute opacity-25 fill-white w-[32px] right-[15px] top-[65%] translate-y-[-50%]"
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
    <div className="w-[100vw] h-[100vh] bg-background ps-[272px] flex items-start">
      <div className="w-container-desktop-2 h-container-desktop-2 max-h-[864px] bg-white rounded-[35px] shadow-container-desktop-2 relative mt-[40px]">
        {/* Encabezado */}
        <div className="w-[100%] h-[184px] bg-[#F5F6F7] rounded-t-[35px] absolute z-10">
          <p className="w-[129px] h-[73px] text-title text-[50px] font-medium leading-[73.44px] absolute top-[40px] left-[65px]">
            Users
          </p>
          <p className="w-[157px] h-[29px] text-title text-[20px] font-normal leading-[29.38px] absolute top-[100px] left-[65px]">
            View all the users
          </p>
          <img
            src={Doodle}
            alt="Doodle"
            className="w-[194.344px] h-[194.344px] absolute top-[-30px] right-[140px] z-10"
          />
        </div>
        {/* Contenedor Principal */}
        <div className="w-container-desktop-3 h-container-desktop-3 mt-[147px] mx-auto rounded-[40px] bg-[#FFF] shadow-container-desktop-3 absolute z-20 left-[50%] translate-x-[-50%]">
          <img
            src={Doodle3}
            alt="Doodle3"
            className="w-[225px] absolute top-[-108px] right-[0px] z-10"
          />
          {/* Input de busqueda */}
          <form className="w-input-users-desktop h-[55px] ms-[20px] mt-[25px] relative flex">
            <img
              src={MagGlass}
              alt="MagGlass"
              className="w-[19.687px] h-[15px] absolute left-[14.39px] top-[50%] translate-y-[-50%] z-10"
            />
            <input
              type="text"
              placeholder="search for users"
              className="max-w-[513px] min-w-[260px] w-[100%] h-[55px] rounded-[40px] ps-[49px] text-[14px] font-normal drop-shadow-input-users-desktop placeholder-title"
            />
            {/* Filtro */}
            <div className="max-w-[319px] min-w-[319px] h-[55px] bg-white rounded-[40px] ms-[20px] shadow-filter-users-desktop flex items-center z-20">
              <button className="w-[128px] h-[40px] ms-[7px] rounded-[40px] border-[1px] border-solid border-border-button text-filter text-[15px] font-bold leading-normal">
                Clear filters
              </button>
              <button className="w-[75px] h-[40px] ms-[5px] rounded-[40px] border-[1px] border-solid border-border-button text-filter text-[15px] font-bold leading-normal">
                Age
              </button>
              <button className="w-[92px] h-[40px] ms-[5px] rounded-[40px] bg-title text-white tet-[15px] font-bold leading-normal">
                Status
              </button>
            </div>
          </form>
          {/* Contenedor de usuarios */}

          <div className="w-container-2 h-auto relative rounded-[20px] bg-[#F5F6F7] overflow-auto mt-[20px] mx-auto shadow-container-desktop-3">
            <table className="w-full min-h-full h-full border-collapse table-fixed  border-spacing-0 divide-y-[6px] divide-white">
              <thead className="h-[40px]">
                <tr>
                  <th className="w-[38px] h-[16px] text-filter text-[14px] font-normal leading-normal text-left ps-[34px] pe-[151px] ">
                    Name
                  </th>
                  <th className="w-[26px] h-[16px] text-filter text-[14px] font-normal leading-normal text-left pe-[50px]">
                    Age
                  </th>
                  <th className="w-[36px] h-[16px] text-filter text-[14px] font-normal leading-normal text-left pe-[173px]">
                    Email
                  </th>
                  <th className="w-[29px] h-[16px] text-filter text-[14px] font-normal leading-normal text-left pe-[56px]">
                    Role
                  </th>
                  <th className="w-[91px] h-[16px] text-filter text-[14px] font-normal leading-normal text-left pe-[55px]">
                    Joined Date
                  </th>
                  <th className="w-[41px] h-[16px] text-filter text-[14px] font-normal leading-normal text-left pe-[256px]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y-[6px] divide-white">
                <tr className="bg-bg-unverified h-[55.63px]">
                  <td className="ps-[34px] relative text-[14px] font-normal text-title">
                    <div className="absolute w-[4px] h-[40px] bg-bar-unverified rounded-r-[10px] left-[0px] top-[50%] translate-y-[-50%]"></div>
                    Michael David
                  </td>
                  <td className="text-[14px] font-bold text-title">25</td>
                  <td className="text-[14px] font-bold text-title">
                    ma.da@gmail.com
                  </td>
                  <td className="text-[14px] font-bold text-title">Mentor</td>
                  <td className="text-[14px] font-bold text-title">
                    Jan 13, 2022
                  </td>
                  <td className="relative">
                    <div className="bg-unverified w-[82px] h-[20px] rounded-[40px] flex items-center justify-center">
                      <p className="text-bar-unverified text-[12px] w-[54px] h-[18px] font-normal leading-normal ">
                        Unverified{" "}
                      </p>
                      <img
                        src={Unverified}
                        alt="Unverified"
                        className="w-[6px] ms-[5px]"
                      />
                    </div>
                    <img
                      src={Edit}
                      alt="Edit"
                      className="absolute right-[19px] top-[50%] translate-y-[-50%]"
                    />
                  </td>
                </tr>
                <tr className="bg-bg-verified h-[55.63px]">
                  <td className="ps-[34px] relative text-[14px] font-normal text-title">
                    <div className="absolute w-[4px] h-[40px] bg-bar-verified rounded-r-[10px] left-[0px] top-[50%] translate-y-[-50%]"></div>
                    Micaela Tamos
                  </td>
                  <td className="text-[14px] font-bold text-title">25</td>
                  <td className="text-[14px] font-bold text-title">
                    micatamos@gmail.com
                  </td>
                  <td className="text-[14px] font-bold text-title">Mentor</td>
                  <td className="text-[14px] font-bold text-title">
                    Jan 13, 2022
                  </td>
                  <td className="relative">
                    <div className="bg-verified w-[70px] h-[20px] rounded-[40px] flex items-center justify-center">
                      <p className="text-bar-verified text-[12px] w-[42px] h-[18px] font-normal leading-normal ">
                        Verified{" "}
                      </p>
                      <img
                        src={Verified}
                        alt="Verified"
                        className="w-[6px] ms-[5px]"
                      />
                    </div>
                    <img
                      src={Edit}
                      alt="Edit"
                      className="absolute right-[19px] top-[50%] translate-y-[-50%]"
                    />
                  </td>
                </tr>
                <RowTable
                  name="Amanda Levete"
                  age="22"
                  email="ama_levete@gmail.com"
                  role="Mentee"
                  joinedDate="Jan 13, 2022"
                  status={true}
                />
                <RowTable
                  name="Franco González"
                  age="23"
                  email="frango@gmail.com"
                  role="Mentee"
                  joinedDate="Jan 13, 2022"
                  status={false}
                />
                <RowTable
                  name="Justín Cieber"
                  age="19"
                  email="cieber_justin@gmail.com"
                  role="Mentee"
                  joinedDate="Jan 13, 2022"
                  status={true}
                />
              </tbody>
              <tfoot className="h-[40px]">
                <tr>
                  <td className="w-[72px] h-[16px] text-[14px] text-filter font-normal leading-normal ps-[34px]">
                    Page 2 / 13
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <img
            src={Dots}
            alt="Dots"
            className="absolute bottom-[23px] right-[45px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
