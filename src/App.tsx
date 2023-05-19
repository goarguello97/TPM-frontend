import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/OnBoarding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
      </Routes>
    </Router>
  );
}

export default App;
