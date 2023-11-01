import SideNav from "./components/SideNav";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="w-full flex flex-row">
      <SideNav />
      <Outlet />
    </div>
  );
}

export default App;
