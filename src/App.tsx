import SideNav from "./components/SideNav";
import { Outlet } from "react-router-dom";

import "./App.css";
import useSupabase from "./hooks/useSupabase";

function App() {
  const supabase = useSupabase();

  return (
    <div className="w-full flex flex-row">
      <SideNav />
      <Outlet />
    </div>
  );
}

export default App;
