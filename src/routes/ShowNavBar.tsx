import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PATH } from "../constants/path";

const ShowNavBar = ({ children }: any) => {
  const { pathname } = useLocation();
  const [ShowNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    if (pathname == PATH.HOME) {
      setShowNavBar(false);
    } else if (pathname == PATH.LOGIN) {
      setShowNavBar(false);
    } else if (pathname == PATH.REGISTER) {
      setShowNavBar(false);
    } else if (pathname.includes(PATH.AUTH)) {
      setShowNavBar(false);
    } else if (pathname == PATH.RECOVER) {
      setShowNavBar(false);
    } else if (pathname.includes(PATH.CHANGE_PASSWORD)) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [pathname]);

  return <div>{ShowNavBar && children}</div>;
};

export default ShowNavBar;
