import shl from "../assets/shl.png";
import { useState } from "react";
import BurgerButton from "./BurgerButton";
import { Link } from "react-router-dom";

function NavBar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div className="navbar mt-0 z-50 bg-orange-600 fixed w-full mb-[94rem] shadow-sm laptop:shadow-yellow-700">
      <div className="container laptop:mx-auto xs:mx-2 flex justify-between">
        <nav className="flex flex-col laptop:flex-row justify-between w-full">
          <div className="logo flex-center flex items-center">
            <img src={shl} alt="Logo" className="laptop:h-[5rem] block w-[5rem]  h-[3rem]" />
          </div>
          <div className="flex-center flex flex-col laptop:flex-row items-center m-auto float-right">
            <BurgerButton
              sidebarVisible={sidebarVisible}
              toggleSidebar={toggleSidebar}
            />
          </div>
          <div
            className={`flex-center flex flex-col laptop:flex-row ${
              sidebarVisible ? "" : "hidden laptop:flex"
            }`}
          >
            <Link
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded font-bold hover:text-xs ${location.hash === "#home" ? "bg-blue-600" : ""}`} to={"/"}            >
              HOME
            </Link>
            <Link
              
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded font-bold hover:text-xs ${location.hash === "/activities" ? "bg-blue-600" : ""}`} to={"/activities"}            >
              ACTIVITIES
            </Link>

            <a
              href="#services"
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded font-bold hover:text-xs ${
                location.hash === "#services" ? "bg-blue-600" : ""
              }`}
            >
              RESOURCES
            </a>

            <Link
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded font-bold hover:text-xs ${location.hash === "/contact" ? "bg-blue-600" : ""}`} to={"/contact"}            >
              CONTACT
            </Link>
            <Link
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded font-bold hover:text-xs ${location.hash === "/login" ? "bg-blue-600" : ""}`} 
              to={"/login"}            >
              LOGIN
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;