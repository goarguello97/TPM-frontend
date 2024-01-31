import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./useTypedSelector";
import { ROLE } from "../constants/roles";
import { getUsers } from "../features/User/UserSlice";

const useNewUser = () => {
  const { users, error, loading } = useAppSelector((state) => state.user);
  const [userOfRoles, setUserOfRoles] = useState({ MENTEES: 0, MENTORS: 0 });
  const [newUserOfRoles, setNewUserOfRoles] = useState({
    MENTEES: 0,
    MENTORS: 0,
  });
  const dispatch = useAppDispatch();

  const setQuantityOfRoles = () => {
    let mentees: any = [];
    let mentors: any = [];
    mentees = users?.filter((usr) => usr.role.role === ROLE.MENTEE);
    mentors = users?.filter((usr) => usr.role.role === ROLE.MENTOR);
    return setUserOfRoles({ MENTEES: mentees.length, MENTORS: mentors.length });
  };

  const setNewQuantityOfRoles = () => {
    let mentees: any = [];
    let mentors: any = [];
    mentees = users?.filter(
      (usr) => newUsers(usr.createdAt) && usr.role.role === ROLE.MENTEE
    );
    mentors = users?.filter(
      (usr) => newUsers(usr.createdAt) && usr.role.role === ROLE.MENTOR
    );
    return setNewUserOfRoles({
      MENTEES: mentees.length,
      MENTORS: mentors.length,
    });
  };

  const newUsers = (dateString: any) => {
    let hoy = new Date();
    let fechaNacimiento = new Date(dateString);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (edad === 0 && diferenciaMeses >= 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!users) {
      dispatch(getUsers(""));
    } else {
      setQuantityOfRoles();
      setNewQuantityOfRoles();
    }
  }, [loading]);

  return {
    userOfRoles,
    newUserOfRoles,
  };
};

export default useNewUser;
