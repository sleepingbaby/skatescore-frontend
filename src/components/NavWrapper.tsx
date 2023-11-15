import React, { useEffect, useRef } from "react";
import SideNav from "./SideNav";
import { MenuIcon } from "../Icons";
import { useLocation, useSearchParams } from "react-router-dom";

const NavWrapper = ({ children }: { children: React.ReactNode }) => {
  const toggleRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const [queryParams] = useSearchParams();

  useEffect(() => {
    // Using the location pathname, if the page ever changes uncheck the drawer toggle
    if (toggleRef.current) {
      toggleRef.current.checked = false;
    }
  }, [location.pathname, queryParams]);

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        ref={toggleRef}
      />
      <div className="drawer-content flex flex-row justify-center">
        <div className="lg:w-[300px]"></div>
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-accent drawer-button lg:hidden fixed right-0 m-2"
        >
          <MenuIcon />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <SideNav />
      </div>
    </div>
  );
};

export default NavWrapper;
