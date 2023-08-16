import { useEffect, useState } from "react";
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
import { getUser, updateUser } from "../features/User/UserSlice";
import { validationUpdate } from "../helpers/validations";
import useChangeAvatar from "../hooks/useChangeAvatar";
import { UPDATE_INITIAL_VALUES } from "../constants/initialValues";

const Profile = () => {
  const { width } = useMediaQuery();
  const [show, setShow] = useState("password");
  const [valuesToUpdate, setValuesToUpdate] = useState(UPDATE_INITIAL_VALUES);
  const { rolesId } = useGetRole();
  const { userLogged } = useAppSelector((state) => state.auth);
  const { user, message, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { values, handleSubmit, handleChange, errors } = useForm(
    valuesToUpdate,
    updateUser,
    validationUpdate
  );
  const { uploadFile, handleChangeAvatar, flag, setFlag } =
    useChangeAvatar(values);

  const togglePassword = () => {
    if (show === "password") {
      setShow("text");
    } else {
      setShow("password");
    }
  };

  useEffect(() => {
    if (!user && userLogged) {
      dispatch(getUser(userLogged.id));
    }
    if (flag) {
      dispatch(getUser(userLogged.id));
      setFlag(false);
    }
    if (message) {
      setTimeout(() => {
        dispatch(getUser(userLogged.id));
      }, 3000);
    }
    if (user) {
      setValuesToUpdate({
        ...UPDATE_INITIAL_VALUES,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        dateOfBirth: user.dateOfBirth.substring(0, 10),
        role: user.role._id,
        _id: user._id,
      });
    }
  }, [user, userLogged, message, flag]);

  if (!user) return <p>Cargando...</p>;

  return width < 1024 ? (
    <div className="h-[100vh] bg-[#F5F6F7] relative">
      <div className="w-[100vw] h-[229px] fold-horizontal:h-[90px] bg-background top-0 rounded-br-[45px] absolute flex flex-col">
        <p className="h-[34px] text-title text-[30px] font-extrabold leading-[44px] ms-[30px] mt-[44px] fold-horizontal:mt-[30px]">
          Profile
        </p>
      </div>
      <div className="w-container min-h-container-profile h-auto fold-horizontal:min-h-0 fold-horizontal:h-container-profile-mobile-fold fold-horizontal:top-[75px] bg-[#FFFFFF] absolute left-[50%] bottom-[0px] translate-x-[-50%] rounded-t-[40px] ">
        <div className="w-[136px] h-[136px] fold:w-[100px] fold:h-[100px] fold:bg-center bg-[#94F0F0] rounded-[50%] absolute top-[3%] right-[21px] translate-y-[-50%] z-30">
          <img
            src={
              user.avatar
                ? user.avatar.imageUrl
                : "https://firebasestorage.googleapis.com/v0/b/the-perfect-mentor-64369.appspot.com/o/avatars%2F5d23dc9e-ad95-4e2a-99ba-f7ddb4ccb6eb.jpg?alt=media&token=00e0b44c-a04e-4db2-9782-72b9946df4b6"
            }
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
        <form
          onSubmit={handleSubmit}
          className="w-[100%]  h-[600px] pt-[100px] flex flex-col items-center fold-horizontal:pb-[40px] overflow-y-scroll absolute z-10"
        >
          <button type="submit">
            <img
              src={Edit}
              alt="Edit"
              className="w-[32px]   left-[130px] fold-horizontal:top-[34px]"
            />
          </button>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Your fullname
          </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          <input
            type="text"
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Your email
          </label>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
          />
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            Your password
          </label>
          <input
            type={show}
            name="password"
            value={values.password}
            onChange={handleChange}
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
          <input
            type="text"
            name="age"
            value={getAge(values.dateOfBirth)}
            disabled
            className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
          />

          {/* <label className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]">
            {user && getAge(values.dateOfBirth)}
          </label> */}
          <div className="w-container-2 border-b-[0.5px] border-[#4444444d] mb-[15px]"></div>
          <label className="w-container-2 h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] mb-[5px]">
            BirthDate
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={values.dateOfBirth.substring(0, 10)}
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
            value={values.role}
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
          {Object.keys(errors).length !== 0 &&
            Object.values(errors).map((error: any, i) => (
              <p
                key={i}
                className="w-container-2 h-[22.5px] text-[14px] text-error font-bold"
              >
                {error}
              </p>
            ))}
          {error && (
            <p className="w-container-2 h-[22.5px] text-[14px] text-error font-bold">
              {error}
            </p>
          )}
          {message && (
            <p className="w-container-2 h-[22.5px] text-[14px] text-loader font-bold">
              {message}
            </p>
          )}
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
              src={
                user.avatar
                  ? user.avatar.imageUrl
                  : "https://firebasestorage.googleapis.com/v0/b/the-perfect-mentor-64369.appspot.com/o/avatars%2F5d23dc9e-ad95-4e2a-99ba-f7ddb4ccb6eb.jpg?alt=media&token=00e0b44c-a04e-4db2-9782-72b9946df4b6"
              }
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
              value={values.name}
              onChange={handleChange}
              className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
            />
            <div className="w-full border-b-[0.5px] border-[#4444444d] mb-[10px]"></div>
            <input
              type="text"
              name="lastname"
              value={values.lastname}
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
              value={values.email}
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
              value={values.password}
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
            <input
              type="text"
              name="age"
              value={getAge(values.dateOfBirth)}
              disabled
              className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
            />
            <div className="w-full border-b-[0.5px] border-[#4444444d] mb-[10px]"></div>
            <label className="w-[22px] h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] me-[491px] mb-[5px]">
              BirthDate
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={values.dateOfBirth.substring(0, 10)}
              onChange={handleChange}
              className="w-container-2 h-[17px] text-title text-[15px] font-bold leading-[17px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
            />
            <div className="w-full border-b-[0.5px] border-[#4444444d] mb-[10px]"></div>
            <label className="w-[26px] h-[16px] text-[#3A3D46] text-[12px] font-normal leading-[16px] me-[487px] mb-[5px]">
              Role
            </label>
            <select
              className="w-container-2 h-[25px] text-title text-[15px] font-bold leading-[25px] focus-visible:border-0 focus-visible:outline-0 mb-[5px]"
              onChange={handleChange}
              value={values.role}
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
            {Object.keys(errors).length !== 0 &&
              Object.values(errors).map((error: any, i) => (
                <p
                  key={i}
                  className="mt-[15px] text-error text-[14px] font-bold leading-[18px]"
                >
                  {error}
                </p>
              ))}
            {error && (
              <p className="mt-[15px] text-error text-[14px] font-bold leading-[18px]">
                {error}
              </p>
            )}
            {message && (
              <p className="mt-[15px] text-loader text-[14px] font-bold leading-[18px]">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
