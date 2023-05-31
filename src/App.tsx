import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/OnBoarding";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import Navbar from "./components/Navbar/Navbar";
import Stadistics from "./pages/Stadistics";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/users" element={<Users />} />
        <Route path="/stadistics" element={<Stadistics />} />
      </Routes>
    </Router>
  );
}

export default App;
