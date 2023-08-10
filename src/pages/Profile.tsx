import { useState } from "react";
import Edit from "../assets/img/Edit.svg";
import Edit2 from "../assets/img/Edit2.svg";
import Doodle from "../assets/img/Doodle.svg";
import MaskGroup from "../assets/img/MaskGroup.svg";
import Doodle2 from "../assets/img/Doodle2.svg";
import Doodle4 from "../assets/img/Doodle4.svg";
import Eye from "../assets/img/Eye.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import getAge from "../hooks/useAge";
import useGetRole from "../hooks/useGetRole";
import useForm from "../hooks/useFormHook";
import { changeAvatar, updateUser } from "../features/User/UserSlice";
import { validationUpdate } from "../helpers/validations";

const Profile = () => {
  const { width } = useMediaQuery();
  const [show, setShow] = useState("password");
  const { rolesId } = useGetRole();
  const { userLogged, error, loading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { values, handleSubmit, handleChange, role, errors } = useForm(
    userLogged,
    updateUser,
    validationUpdate
  );
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState(null);

  const togglePassword = () => {
    if (show === "password") {
      setShow("text");
    } else {
      setShow("password");
    }
  };

  const handleChangeAvatar = (e: any) => {
    if (!e.target.files) return;
    setImageUpload(e.target.files[0]);
  };

  const uploadFile = async (e: any) => {
    e.preventDefault();

    if (!imageUpload) return;
    const formData = new FormData();
    formData.append("image", imageUpload);
    formData.append("id", values?.id);
    try {
      await dispatch(changeAvatar(formData));
    } catch (error) {
      console.log(error);
    }
  };
  
  return width < 1024 ? (
    <div className="h-[100vh] bg-[#F5F6F7] relative">
      <div className="w-[100vw] h-[229px] fold-horizontal:h-[90px] bg-background top-0 rounded-br-[45px] absolute flex flex-col ">
        <p className="h-[34px] text-title text-[30px] font-extrabold leading-[44px] ms-[30px] mt-[44px] fold-horizontal:mt-[30px]">
          Profile
        </p>
        <img
          src={Edit}
          alt="Edit"
          className="w-[32px] absolute top-[48px] left-[137px] fold-horizontal:top-[34px]"
        />
      </div>
      <div className="w-container min-h-container-profile h-auto fold-horizontal:min-h-0 fold-horizontal:h-container-profile-mobile-fold fold-horizontal:top-[75px] bg-[#FFFFFF] absolute left-[50%] bottom-[0px] translate-x-[-50%] rounded-t-[40px] ">
        <div className="w-[136px] h-[136px] fold:w-[100px] fold:h-[100px] fold:bg-center bg-[#94F0F0] rounded-[50%] absolute top-[3%] right-[21px] translate-y-[-50%] z-30">
          <img
            src={userLogged && userLogged.avatar.imageUrl}
            alt=""
            className="w-[136px] h-[136px] fold:w-[100px] fold:h-[100px] rounded-[50%]"
          />
        </div>

        {/* Form para cambiar el avatar */}
        <form className="w-[100%] flex flex-col items-start absolute left-[50%] translate-x-[-50%] ps-[30px] fold:ps-[10px] pt-[10px]  rounded-t-[40px] z-20 bg-white">
          <input
            type="file"
            onChange={handleChangeAvatar}
            className="text-filter text-[15px] fold:text-[12px] focus:outline-none file:text-title file:border-border-button file:rounded-[16px] file:bg-filter file:cursor-pointer"
          />
          <button
            onClick={uploadFile}
            className="w-[150px] fold:w-[90px] h-[32px] text-[15px] fold:text-[12px] text-filter font-bold leading-normal border-[1px] border-border-button rounded-[16px] mt-[1px]"
          >
            Change avatar
          </button>
        </form>

        {/* Form para editar el usuario */}
        <form className="w-[100%]  h-[600px] pt-[100px] flex flex-col items-center fold-horizontal:pb-[40px] overflow-y-scroll absolute z-10">
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Your fullname
          </label>
          <input
            type="text"
            name="name"
            value={userLogged && `${userLogged.name}`}
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          <input
            type="text"
            name="lastname"
            value={userLogged && `${userLogged.lastname}`}
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Your email
          </label>
          <input
            type="text"
            name="email"
            value={userLogged && userLogged.email}
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Your passwrd
          </label>
          <input
            type={show}
            name="password"
            value="Password"
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px] relative">
            <img
              src={Eye}
              alt="Eye"
              className="w-[12.67px] absolute bottom-[13.33px] right-[5px] cursor-pointer"
              onClick={togglePassword}
            />
          </div>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Age
          </label>

          <label className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]">
            {userLogged && getAge(userLogged.dateOfBirth)}
          </label>
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            BirthDate
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={
              userLogged && values?.dateOfBirth.toString().substring(0, 10)
            }
            onChange={handleChange}
            className="w-container-2 min-h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Role
          </label>
          <select
              className="w-container-2 h-[25px] text-title text-[15px] font-bold leading-[25px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
              onChange={handleChange}
              value={userLogged && values?.role._id}
              name="role"
            >
              <option
                value={rolesId.MENTEE}
                className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
              >
                Mentee
              </option>
              <option
                value={rolesId.MENTOR}
                className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
              >
                Mentor
              </option>
            </select>
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
        </form>
      </div>
    </div>
  ) : (
    <div className="w-[100vw] h-[100vh] bg-background ps-[272px] flex items-start">
      <div className="w-container-desktop-2 h-container-desktop-2 max-h-[864px] bg-white rounded-[35px] shadow-container-desktop-2 relative mt-[40px]">
        <img
          src={Doodle}
          alt="Doodle"
          className="w-[177.018px] absolute top-[199px] left-[50px]"
        />
        <img
          src={Doodle4}
          alt="Doodle4"
          className="w-[167.051px] absolute top-[343px] right-[43.66px]"
        />
        <div className="w-full h-[184px] bg-[#F5F6F7] rounded-t-[35px] absolute top-[0px] z-10">
          <p className="w-[148px] h-[73px] text-[50px] text-title font-medium leading-normal absolute left-[50%] translate-x-[-50%] top-[40px]">
            Profile
          </p>
        </div>
        {/* Contenedor principal */}
        <div className="w-[548px] h-container-desktop-3 bg-[#FFFFFF] shadow-container-desktop-3 rounded-[40px] absolute top-[137px] left-[50%] translate-x-[-50%] z-20">
          {/* Foto de perfil */}
          <div
            className={`w-[138px] h-[138px] bg-[#94F0F0] rounded-[50%] absolute top-[-30px] left-[50%] translate-x-[-50%]`}
          >
            <img
              src={userLogged && userLogged.avatar.imageUrl}
              alt="userLogged.avatar.imageUrl"
              className="w-[138px] h-[138px] rounded-[50%]"
            />
            <form className="w-[548px] flex flex-col items-center absolute left-[50%] translate-x-[-50%]">
              <input
                type="file"
                onChange={handleChangeAvatar}
                className="text-filter text-[15px] focus:outline-none file:text-title file:border-border-button file:rounded-[16px] file:bg-filter file:cursor-pointer"
              />
              <button
                onClick={uploadFile}
                className="w-[150px] h-[32px] text-[15px] text-filter font-bold leading-normal border-[1px] border-border-button rounded-[16px] mt-[1px]"
              >
                Change avatar
              </button>
            </form>
          </div>
          {/*  */}
          <img
            src={Doodle2}
            alt="Doodle2"
            className="w-[286.029px] absolute left-[0%] translate-x-[-50%] top-[-85px] rotate-doodle2"
          />
          <img
            src={MaskGroup}
            alt="MaskGroup"
            className="w-[242.331px] absolute left-[100%] translate-x-[-50%] top-[-30px] rotate-maskGroup"
          />
          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="w-input h-auto mt-[180px] mx-auto"
          >
            <button
              type="submit"
              className="w-[100px] h-[32px] text-[15px] text-filter font-bold leading-normal border-[1px] border-border-button rounded-[16px] flex items-center justify-center absolute left-[50%] translate-x-[-50%] top-[175px]"
            >
              Edit <img src={Edit2} alt="Edit2" className="w-[16px] ms-[9px]" />
            </button>
            <label className="w-[62px] h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
              Your fullname
            </label>
            <input
              type="text"
              name="name"
              value={userLogged && values?.name}
              onChange={handleChange}
              className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
            />
            <div className="w-full border-b-[0.5px] border-[#4444444d] mb-[10px]"></div>
            <input
              type="text"
              name="lastname"
              value={userLogged && values?.lastname}
              onChange={handleChange}
              className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
            />
            <div className="w-full border-b-[0.5px] border-[#4444444d] mb-[10px]"></div>
            <label className="w-[62px] h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
              Your email
            </label>
            <input
              type="text"
              name="email"
              value={userLogged && values?.email}
              onChange={handleChange}
              className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
            />
            <div className="w-full border-b-[0.5px] border-[#4444444d] mb-[10px]"></div>
            <label className="w-[86px] h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
              Your password
            </label>
            <input
              type={show}
              name="password"
              defaultValue="********"
              value={userLogged && values?.password}
              onChange={handleChange}
              className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
            />
            <div className="w-full border-b-[0.5px] border-[#4444444d] mb-[10px] relative">
              <img
                src={Eye}
                alt="Eye"
                className="w-[12.67px] absolute bottom-[13.33px] right-[5px] cursor-pointer"
                onClick={togglePassword}
              />
            </div>
            <label className="w-[22px] h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] me-[491px] mb-[5px]">
              Age
            </label>
            <br />
            <label className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]">
              {userLogged && getAge(userLogged.dateOfBirth)}
            </label>
            <div className="w-full border-b-[0.5px] border-[#4444444d] mb-[10px]"></div>
            <label className="w-[22px] h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] me-[491px] mb-[5px]">
              BirthDate
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={
                userLogged && values?.dateOfBirth.toString().substring(0, 10)
              }
              onChange={handleChange}
              className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
            />
            <div className="w-full border-b-[0.5px] border-[#4444444d] mb-[10px]"></div>
            <label className="w-[26px] h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] me-[487px] mb-[5px]">
              Role
            </label>
            {/* <input
              type="text"
              name="Role"
              value={
                userLogged &&
                userLogged.role.role[0] +
                  userLogged.role.role.slice(1).toLowerCase()
              }
              className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
            /> */}
            <select
              className="w-container-2 h-[25px] text-title text-[15px] font-bold leading-[25px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
              onChange={handleChange}
              value={userLogged && values?.role._id}
              name="role"
            >
              <option
                value={rolesId.MENTEE}
                className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
              >
                Mentee
              </option>
              <option
                value={rolesId.MENTOR}
                className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
              >
                Mentor
              </option>
            </select>
            <div className="w-full border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
