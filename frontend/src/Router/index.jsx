import { Routes, Route } from "react-router-dom";
import { HomePage, SignUp, SignIn, DashBoard, SendMoney } from "../Components";

const Routespaths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/dashboard" element={<DashBoard />}></Route>
      <Route path="/send" element={<SendMoney />}></Route>
    </Routes>
  );
};

export default Routespaths;
