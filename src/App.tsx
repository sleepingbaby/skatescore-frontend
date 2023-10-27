import SideNav from "./components/SideNav";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <SideNav />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </>
  );
}

export default App;
