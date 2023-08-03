import Unverified from "../assets/img/Unverified.svg";
import Verified from "../assets/img/Verified.svg";
import Edit from "../assets/img/Edit.svg";
import { useEffect, useState } from "react";
import { UserRow } from "../interfaces/RowTable.interfaces";
import { useAppSelector } from "../hooks/useTypedSelector";
import { ROLE } from "../constants/roles";

const CardUserMobile = ({
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

  const { users, error, loading } = useAppSelector((state) => state.user);
  const { userLogged } = useAppSelector((state) => state.auth);

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
  return (
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
      {userLogged?.role.role === ROLE.ADMIN && (
        <img
          src={Edit}
          alt="Edit"
          className="absolute w-[32px] right-[15px] top-[65%] translate-y-[-50%]"
        />
      )}

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
      <div
        className={`absolute w-[4px] h-[60px] ${color.bar} rounded-tr-[10px] rounded-br-[10px] left-[0px] top-[50%] translate-y-[-50%]`}
      ></div>
    </div>
  );
};

export default CardUserMobile;
