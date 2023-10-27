import SideNav from "./components/SideNav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <SideNav />
      <Outlet />
    </div>
  );
}

export default App;
