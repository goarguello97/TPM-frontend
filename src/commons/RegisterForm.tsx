import Logo from "../assets/img/ThePerfectMentor.svg";
import Doodle from "../assets/img/Doodle.svg";
import Doodle2 from "../assets/img/Doodle2.svg";
import { useEffect, useState } from "react";
import Email from "../assets/img/Email.svg";
import Password from "../assets/img/Password.svg";
import User from "../assets/img/User.svg";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineFlag } from "react-icons/ai";
import useMediaQuery from "../hooks/useMediaQuery";
import useGetRole from "../hooks/useGetRole";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { registerUser, reset } from "../features/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useFormHook";
import { REGISTER_INITIAL_VALUES } from "../constants/initialValues";
import { validationRegister } from "../helpers/validations";

const RegisterForm = () => {
  const { width } = useMediaQuery();
  const [valuesToRegister, setValuesToRegister] = useState(
    REGISTER_INITIAL_VALUES
  );
  const { rolesId } = useGetRole();
  const { userRegister, loading, error } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const { values, handleChange, handleSubmit, role, errors } = useForm(
    valuesToRegister,
    registerUser,
    validationRegister
  );

  const formPagesMobile = [
    <>
      <div className="w-input h-[55px] mx-auto mt-[20px] mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="username"
          placeholder="username"
          value={values.username}
          onChange={handleChange}
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          min={3}
          max={30}
          required
        />
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          min={10}
          max={50}
          required
        />
        <img
          src={Email}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          min={8}
          max={30}
          required
        />
        <img
          src={Password}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
    </>,
    <>
      <div className="w-input h-[55px] mx-auto mt-[20px] mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={handleChange}
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          min={3}
          max={30}
          required
        />
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          value={values.lastname}
          onChange={handleChange}
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          min={3}
          max={30}
          required
        />
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="country"
          placeholder="country"
          value={values.country}
          onChange={handleChange}
          className="bg-transparent w-[100%] h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          min={3}
          max={30}
          required
        />
        <div className="absolute bg-white z-30 w-[32px] h-[32px] rounded-[16px] top-[50%] translate-y-[-50%] left-[11px]">
          <AiOutlineFlag
            strokeWidth={40}
            className="absolute text-title w-[32px] top-[50%] translate-y-[-50%] font-bold"
          />
        </div>
      </div>
    </>,
    <>
      <div className="w-input h-[55px] mx-auto pe-[40px] mt-[20px] mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="date"
          name="dateOfBirth"
          placeholder="dateOfBirth"
          value={values.dateOfBirth}
          onChange={handleChange}
          className="bg-transparent w-[100%] h-[100%] text-title placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          required
        />
        <div className="absolute bg-white z-30 w-[32px] h-[32px] rounded-[16px] top-[50%] translate-y-[-50%] left-[11px]">
          <CiCalendarDate
            strokeWidth={1}
            className="absolute text-title w-[32px] top-[50%] translate-y-[-50%] font-bold"
          />
        </div>
      </div>
      <div className="w-input h-[55px] mx-auto mb-[15px] bg-transparent border-[1px] border-border rounded-[40px] relative flex justify-start items-center">
        <div className="ps-[53px] me-[10px] flex justify-center items-center">
          <label htmlFor="Mentor" className="me-[10px] text-title">
            Mentor
          </label>
          <input
            className="accent-loader"
            type="radio"
            id="mentor"
            name="role"
            value={rolesId.MENTOR}
            onChange={handleChange}
            checked={role}
          />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="Mentee" className="me-[10px] text-title">
            Mentee
          </label>
          <input
            className="accent-loader"
            type="radio"
            id="mentee"
            name="role"
            value={rolesId.MENTEE}
            onChange={handleChange}
            checked={!role}
          />
        </div>
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
    </>,
  ];
  const formPages = [
    <>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="username"
          placeholder="username"
          value={values.username}
          onChange={handleChange}
          className="bg-transparent w-input h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          min={3}
          max={30}
          required
        />
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
          className="bg-transparent w-input h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          min={3}
          max={50}
          required
        />
        <img
          src={Email}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          className="bg-transparent w-input h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          min={8}
          max={30}
          required
        />
        <img
          src={Password}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
    </>,
    <>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={handleChange}
          className="bg-transparent w-input h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          min={3}
          max={30}
          required
        />
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          value={values.lastname}
          onChange={handleChange}
          className="bg-transparent w-input h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          min={3}
          max={30}
          required
        />
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="text"
          name="country"
          placeholder="country"
          value={values.country}
          onChange={handleChange}
          className="bg-transparent w-input h-[100%] placeholder-title  focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          min={3}
          max={30}
          required
        />
        <div className="absolute bg-white z-30 w-[32px] h-[32px] rounded-[16px] top-[50%] translate-y-[-50%] left-[11px]">
          <AiOutlineFlag
            strokeWidth={40}
            className="absolute text-title w-[32px] top-[50%] translate-y-[-50%] font-bold"
          />
        </div>
      </div>
    </>,
    <>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative">
        <input
          type="date"
          name="dateOfBirth"
          placeholder="date of birth"
          value={values.dateOfBirth}
          onChange={handleChange}
          className="bg-transparent w-input h-[100%] text-title placeholder-title focus-visible:border-0 focus-visible:outline-0 ps-[53px]"
          required
        />
        <div className="absolute bg-white z-30 w-[32px] h-[32px] rounded-[16px] top-[50%] translate-y-[-50%] left-[11px]">
          <CiCalendarDate
            strokeWidth={1}
            className="absolute text-title w-[32px] top-[50%] translate-y-[-50%] font-bold"
          />
        </div>
      </div>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mb-[10px] bg-transparent border-[1px] border-border rounded-[40px] relative flex justify-start items-center">
        <div className="ps-[53px] me-[10px] flex justify-center items-center">
          <label htmlFor="Mentor" className="me-[10px] text-title">
            Mentor
          </label>
          <input
            className="accent-loader"
            type="radio"
            id="mentor"
            name="role"
            value={rolesId.MENTOR}
            onChange={handleChange}
            checked={role}
          />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="Mentee" className="me-[10px] text-title">
            Mentee
          </label>
          <input
            className="accent-loader"
            type="radio"
            id="mentee"
            name="role"
            value={rolesId.MENTEE}
            onChange={handleChange}
            checked={!role}
          />
        </div>
        <img
          src={User}
          alt=""
          className="absolute w-[32px] top-[50%] translate-y-[-50%] left-[11px]"
        />
      </div>
    </>,
  ];

  useEffect(() => {
    if (userRegister) {
      setTimeout(() => {
        dispatch(reset());
        navigate("/login");
      }, 5000);
    }
    if (rolesId) {
      setValuesToRegister({ ...REGISTER_INITIAL_VALUES, role: rolesId.MENTOR });
    }
  }, [userRegister, rolesId]);

  return width < 1024 ? (
    <form
      onSubmit={handleSubmit}
      className="min-h-100% bg-background relative flex flex-col justify-center items-start"
    >
      <img
        className="absolute w-[182.44px] top-[72px] right-[29px] rotate-doodle z-1 "
        src={Doodle}
        alt="Doodle"
      />
      <img
        className="absolute w-[108.86px] top-[45px] left-[121px] z-1"
        src={Doodle2}
        alt="Doodle2"
      />
      <img
        className="w-[200.62px] ml-[30px] fold-horizontal:mt-[30px] z-10"
        src={Logo}
        alt="The Perfect Mentor"
      />
      <div className="bg-background w-sign-in min-h-[361px] h-auto border-[2px] mt-[20.58px] mb-[25px] mx-auto border-button rounded-[40px] z-10 flex flex-col ">
        <p className="text-title font-bold text-[30px] ms-[25px] mt-[30px] mb-[12px]">
          Sign in
        </p>
        <div className="w-line border-dashed border-b-2 border-border mx-auto"></div>

        {formPagesMobile[page]}
        {Object.keys(errors).length !== 0
          && Object.values(errors).map((error: any, i) => (
              <p
                key={i}
                className="w-input h-[22.5px] mx-auto mb-[10px] text-start text-[14px] text-error font-bold"
              >
                {error}
              </p>
            ))
          }
        {error && (
          <p className="w-input h-[22.5px] mx-auto mb-[10px] text-start text-[14px] text-error font-bold">
            {error}
          </p>
        )}
        {userRegister && (
          <p className="w-input h-[22.5px] mx-auto mb-[10px] text-start text-[14px] text-loader font-bold">
            Successful registration. You must activate your account, check your
            email inbox.
          </p>
        )}
      </div>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mx-auto mt-[30px] mb-[80px] flex justify-between items-center">
        {page > 0 && page < 2 && (
          <>
            <button
              className="w-[45%] h-[55px] mx-auto fold-horizontal:mb-[30px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
              onClick={(e) => {
                e.preventDefault();
                setPage(page - 1);
              }}
            >
              Back
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
              className={`${
                page > 0 ? "w-[45%]" : "w-button"
              } h-[55px] mx-auto fold-horizontal:mb-[30px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]`}
            >
              Next
            </button>
          </>
        )}
        {page === 0 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
            className={`${
              page > 0 ? "w-[45%]" : "w-button"
            } h-[55px] mx-auto fold-horizontal:mb-[30px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]`}
          >
            Next
          </button>
        )}
        {page === 2 && (
          <>
            <button
              className="w-[45%] h-[55px] mx-auto fold-horizontal:mb-[30px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
              onClick={(e) => {
                e.preventDefault();
                setPage(page - 1);
              }}
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-[45%] h-[55px] mx-auto fold-horizontal:mb-[30px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </form>
  ) : (
    <form
      onSubmit={handleSubmit}
      className="w-[100%] xl:w-[50%] h-[100%] xl:ps-[50px] flex flex-col items-center xl:items-start justify-center relative"
    >
      <p className="w-[162px] mt-[30px] text-title text-[40px] font-extrabold leading-[59px] z-30">
        Sign up
      </p>
      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[0px] border-b-[1px] border-title border-dashed mt-[10px] mb-[30px]"></div>

      {formPages[page]}
      {Object.keys(errors).length !== 0
        ? Object.values(errors).map((error: any, i) => (
            <p
              key={i}
              className="w-input max-w-[323px] mt-[15px] text-error text-[14px] font-bold leading-[18px]"
            >
              {error}
            </p>
          ))
        : null}
      {error ? (
        <p className="w-input max-w-[323px] mt-[15px] text-error text-[14px] font-bold leading-[18px]">
          {error}
        </p>
      ) : null}
      {userRegister && (
        <p className="w-input max-w-[323px] mt-[15px] text-loader text-[14px] font-bold leading-[18px]">
          Successful registration. You must activate your account, check your
          email inbox.
        </p>
      )}

      <div className="w-input desktop:w-input-desktop max-w-[323px] h-[55px] mt-[30px] mb-[80px] flex justify-between items-center">
        {page > 0 && page < 2 && (
          <>
            <button
              className="w-[45%] h-full bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
              onClick={(e) => {
                e.preventDefault();
                setPage(page - 1);
              }}
            >
              Back
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
              className={`${
                page > 0 ? "w-[45%]" : "w-full"
              } h-full max-w-[323px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]`}
            >
              Next
            </button>
          </>
        )}
        {page === 0 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
            className={`${
              page > 0 ? "w-[45%]" : "w-full"
            } h-full max-w-[323px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]`}
          >
            Next
          </button>
        )}
        {page === 2 && (
          <>
            <button
              className="w-[45%] h-full bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
              onClick={(e) => {
                e.preventDefault();
                setPage(page - 1);
              }}
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-[45%] h-full max-w-[323px] bg-button rounded-[40px] font-bold text-[15px] text-[#fff]"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default RegisterForm;
