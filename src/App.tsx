import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/OnBoarding";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import Navbar from "./components/Navbar/Navbar";
import Stadistics from "./pages/Stadistics";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import PrivateRoute from "./routes/PrivateRoute";
import PrivateRouteAdmin from "./routes/PrivateRouteAdmin";
import ShowNavBar from "./routes/ShowNavBar";
import ForgotPass from "./pages/ForgotPass";
import ChangePass from "./pages/ChangePass";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { secret } from "./features/Auth/AuthSlice";

function App() {
  const { userLogged, loading } = useAppSelector((state) => state.auth);
  const [flag, setFlag] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userLogged) {
      if (flag) {
        setFlag(false);
        dispatch(secret());
      }
    }
  }, [userLogged, loading]);

  return (
    <Router>
      <ShowNavBar>
        <Navbar />
      </ShowNavBar>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/users" element={<Users />} />
        <Route path="/stadistics" element={<Stadistics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth/:token" element={<Auth />} />
        <Route path="/recover-password" element={<ForgotPass />} />
        <Route path="/change-password/:token" element={<ChangePass />} />
      </Routes>
    </Router>
  );
}

export default App;
