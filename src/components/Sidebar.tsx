import React from "react";
import logo from "../assets/logo.png";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="col-span-1 row-">
      <div className="flex text-4xl font-bold p-10 h-[100vh]">
        <img className="w-10 h-10" src={logo} alt="" />
        <div className="ml-4">Motiv</div>
      </div>
    </div>
  );
};

export default Sidebar;
