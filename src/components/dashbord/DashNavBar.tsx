// import shl from "../../assets/shl.png";
// import { useState } from "react";
// import BurgerButton from "../BurgerButton";
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

function DashNavBar() {
  //   const [sidebarVisible, setSidebarVisible] = useState(false);
  //   const toggleSidebar = () => {
  //     setSidebarVisible(!sidebarVisible);
  //   };
  return (
    <div className="navbar bg bg-blue-1000  mt-0 z-50 border-b text-white  fixed w-full mb-[94rem] shadow-sm laptop:shadow-yellow-700">
      <div className="container laptop:mx-auto xs:mx-2 flex justify-between">
        <nav className="flex flex-col laptop:flex-row justify-between w-full">
          <div className="logo flex-center flex items-center">
            <Link to={"/"}>
              <h1 className="text-5xl font-bold">SHL</h1>
            </Link>
          </div>
          <div className="flex-center flex flex-col laptop:flex-row items-center my-auto float-right">
            <h2>papa Yvan</h2>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default DashNavBar;