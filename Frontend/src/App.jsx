import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import JourneySteps from "./components/JourneySteps";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard/:name" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
