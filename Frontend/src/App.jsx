import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

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
