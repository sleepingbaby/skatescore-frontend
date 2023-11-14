import { Outlet } from "react-router-dom";

import "./App.css";
import NavWrapper from "./components/NavWrapper";

function App() {
  return (
    <NavWrapper>
      <Outlet />
    </NavWrapper>
  );
}

export default App;
