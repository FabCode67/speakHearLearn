import shl from "../src/assets/shl.png";
import { useState } from "react";
import BurgerButton from "./BurgerButton";
// import { useLocation } from "react-router-dom";
// import BurgerButton from "./BurgerButton";
// import LocalizationSwicher from "./Localization";
// import { useTranslation } from "react-i18next";


function NavBar() {
//   const { t } = useTranslation();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

//   const location = useLocation();

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
            <a
              href="#home"
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded font-bold hover:text-xs ${
                location.hash === "#home" ? "bg-blue-600" : ""
              }`}
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded font-bold hover:text-xs ${
                location.hash === "#about" ? "bg-blue-600" : ""
              }`}
            >
              ACTIVITIES
            </a>

            <a
              href="#services"
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded font-bold hover:text-xs ${
                location.hash === "#services" ? "bg-blue-600" : ""
              }`}
            >
              RESOURCES
            </a>

            <a
              href="#contact"
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded font-bold hover:text-xs ${
                location.hash === "#contact" ? "bg-blue-600" : ""
              }`}
            >
              CONTACT
            </a>
            <a
              href="login"
              onClick={toggleSidebar}
              className={`inline-flex items-center py-3 px-3 laptop:my-6 my-2 overflow-y-auto rounded font-bold hover:text-xs ${
                location.hash === "#contact" ? "bg-blue-600" : ""
              }`}
            >
              LOGIN
            </a>
           
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;