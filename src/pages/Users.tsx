import MagGlass from "../assets/img/MagGlass.svg";
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

      <div></div>

      <div className="w-shadow h-[196px] bg-gradient-to-t from-[#FFFFFF]  absolute bottom-[-30px] left-[50%] translate-x-[-50%] translate-y-[-50%] z-9">
        {/* Esto es una sombra */}
      </div>
    </div>
  );
};

export default Users;
