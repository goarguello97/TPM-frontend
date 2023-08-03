import Unverified from "../assets/img/Unverified.svg";
import Verified from "../assets/img/Verified.svg";
import Edit from "../assets/img/Edit.svg";
import { UserRow } from "../interfaces/RowTable.interfaces";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/useTypedSelector";
import useMediaQuery from "../hooks/useMediaQuery";

const RowTableUser = ({
  name,
  age,
  email,
  role,
  joinedDate,
  status,
}: UserRow) => {
  const { width } = useMediaQuery();
  const [color, setColor] = useState({
    bg: "bg-bg-verified",
    bg2: "bg-verified",
    bar: "bg-bar-verified",
    text: "text-bar-verified",
  });
  const [statusContainer, setStatusContainer] = useState({
    widthContainer: "w-[70px]",
    widthText: "w-[42px]",
    text: "Verified",
  });

  const { users, error, loading } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!status) {
      setColor({
        bg: "bg-bg-unverified",
        bg2: "bg-unverified",
        bar: "bg-bar-unverified",
        text: "text-bar-unverified",
      });
      setStatusContainer({
        widthContainer: "w-[82px]",
        widthText: "w-[54px]",
        text: "Unverified",
      });
    }
  }, [status, loading]);
  
  return width < 1024 ? (
    <div
      className={`w-person h-[102px] min-h-[102px] ${color.bg2} rounded-[20px] flex flex-col ps-[19px] justify-center relative mb-[5px]`}
    >
      <div
        className={`flex ${color.bg} default:text-[12px] fold:text-[9px] ${color.text} default:w-[82px] fold:w-[62px] h-[18px] rounded-[40px] justify-center items-center absolute right-[15px] top-[15px]`}
      >
        Unverified
        <img
          src={status ? Verified : Unverified}
          alt={status ? "Verified" : "Unverified"}
          className="ms-[5px] w-[6px]"
        />
      </div>
      <img
        src={Edit}
        alt="Edit"
        className="absolute w-[32px] right-[15px] top-[65%] translate-y-[-50%]"
      />
      <p className="font-bold default:text-[14px] fold:text-[11px]">
        {name} | age 25 <br />
        Email: <span className="font-normal">{email}</span> <br />
        Role:{" "}
        <span className="font-normal">
          {role[0] + role.slice(1).toLowerCase()}
        </span>{" "}
        <br />
        Joined Date: <span className="font-normal">Jan 13, 2022</span>
      </p>
      <div className={`absolute w-[4px] h-[60px] ${color.bar} rounded-tr-[10px] rounded-br-[10px] left-[0px] top-[50%] translate-y-[-50%]`}></div>
    </div>
  ) : (
    <tr className={`${color.bg} h-[55.63px]`}>
      <td className="ps-[34px] relative text-[14px] font-normal text-title">
        <div
          className={`absolute w-[4px] h-[40px] ${color.bar} rounded-r-[10px] left-[0px] top-[50%] translate-y-[-50%]`}
        ></div>
        {name}
      </td>
      <td className="text-[14px] font-bold text-title">{age}</td>
      <td className="text-[14px] font-bold text-title">{email}</td>
      <td className="text-[14px] font-bold text-title">
        {role[0] + role.slice(1).toLowerCase()}
      </td>
      <td className="text-[14px] font-bold text-title">{joinedDate}</td>
      <td className="relative">
        <div
          className={`${color.bg2} ${statusContainer.widthContainer} h-[20px] rounded-[40px] flex items-center justify-center`}
        >
          <p
            className={`${color.text} text-[12px] ${statusContainer.widthText} h-[18px] font-normal leading-normal`}
          >
            {statusContainer.text}
          </p>
          <img
            src={status ? Verified : Unverified}
            alt={status ? "Verified" : "Unverified"}
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
  );
};

export default RowTableUser;
