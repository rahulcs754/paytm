import { Users } from "./Atoms/Users";
import { Balance } from "./Atoms/Balance";
const DashBoard = () => {
  return (
    <div className="m-8">
      <Balance />
      <Users />
    </div>
  );
};

export default DashBoard;
