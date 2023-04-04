import React from "react";
import avatar from "../assets/avatar.png";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between p-10">
      <form className="flex bg-[#F5F4F6]">
        <label htmlFor="search" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 opacity-60 p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </label>
        <input
          id="search"
          type="text"
          className="outline-none px-2 py-1 bg-[#F5F4F6]"
          placeholder="Search or type"
        />
      </form>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-7 h-7 opacity-60"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        <img className="w-12 h-12 rounded-full ml-12" src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Header;
