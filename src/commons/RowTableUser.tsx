import Unverified from "../assets/img/Unverified.svg";
import Verified from "../assets/img/Verified.svg";
import Edit from "../assets/img/Edit.svg";
import { UserRow } from "../interfaces/RowTable.interfaces";
import { useEffect, useState } from "react";

const RowTableUser = ({
  name,
  age,
  email,
  role,
  joinedDate,
  status,
}: UserRow) => {
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
  }, [status]);
  return (
    <tr className={`${color.bg} h-[55.63px]`}>
      <td className="ps-[34px] relative text-[14px] font-normal text-title">
        <div
          className={`absolute w-[4px] h-[40px] ${color.bar} rounded-r-[10px] left-[0px] top-[50%] translate-y-[-50%]`}
        ></div>
        {name}
      </td>
      <td className="text-[14px] font-bold text-title">{age}</td>
      <td className="text-[14px] font-bold text-title">{email}</td>
      <td className="text-[14px] font-bold text-title">{role}</td>
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
