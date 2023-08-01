import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./useTypedSelector";
import { getRoles } from "../features/Role/RoleSlice";
import { ROLE } from "../constants/roles";

const useGetRole = () => {
  const [rolesId, setRolesId] = useState({ MENTEE: "", MENTOR: "", ADMIN: "" });
  const { roles } = useAppSelector((state) => state.role);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!roles) {
      dispatch(getRoles());
    } else {
      setRolesId({
        MENTEE: roles[0]._id,
        MENTOR: roles[1]._id,
        ADMIN: roles[2]._id,
      });
    }
  }, [roles]);

  return { rolesId };
};

export default useGetRole;
