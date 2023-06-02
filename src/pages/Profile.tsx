import Edit from "../assets/img/Edit.svg";
import ImgProfile from "../assets/img/Profile-Img.png";

const Profile = () => {
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
      </div>
    </div>
  );
};

export default Profile;
