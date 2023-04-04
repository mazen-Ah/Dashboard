import React, { ReactNode } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-1">
        <Sidebar />
        <div className="w-full col-span-4">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
