import Doodle from "../assets/img/Doodle.svg";
import Doodle3 from "../assets/img/Doodle3.svg";
import MagGlass from "../assets/img/MagGlass.svg";
import X from "../assets/img/X.svg";
import Unverified from "../assets/img/Unverified.svg";
import Verified from "../assets/img/Verified.svg";
import Edit from "../assets/img/Edit.svg";
import Dots from "../assets/img/Dots.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import RowTableUser from "../commons/RowTableUser";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { getUsers } from "../features/User/UserSlice";
import CardUserMobile from "../commons/CardUserMobile";
import getEdad from "../hooks/useAge";

const Users = () => {
  const { width } = useMediaQuery();
  const { users, error, loading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!users) {
      dispatch(getUsers());
    }
  }, [loading]);

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
        {users &&
          users.map((user) => (
            <CardUserMobile
              key={user._id}
              name={`${user.name} ${user.lastname}`}
              age={getEdad(user.dateOfBirth)}
              email={user.email}
              role={user.role.role}
              joinedDate={user.createdAt.toString().substring(0,10)}
              status={user.verify}
            />
          ))}
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
                {users &&
                  users.map((user) => (
                    <RowTableUser
                      key={user._id}
                      name={`${user.name} ${user.lastname}`}
                      age={getEdad(user.dateOfBirth)}
                      email={user.email}
                      role={user.role.role}
                      joinedDate={user.createdAt.toString().substring(0,10)}
                      status={user.verify}
                    />
                  ))}
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
