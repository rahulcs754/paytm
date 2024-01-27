import { Routes, Route } from "react-router-dom";
import { SignUp, SignIn, DashBoard, SendMoney } from "../Components";

const Routespaths = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/dashboard" element={<DashBoard />}></Route>
      <Route path="/send" element={<SendMoney />}></Route>
    </Routes>
  );
};

export default Routespaths;
