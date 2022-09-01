import React from "react";

const Header = () => {
  return (
    <div className="h-14 bg-[#000000a6] flex w-full z-50 items-center justify-center fixed top-0">
      <div className="container flex flex-row justify-between items-center h-full px-2 sm:px-24">
        <h4 className="text-white opacity-100 text-xl">Brian Newton</h4>
        <div>
          <a href="#contact" rel="noopener noreferrer">
            <div className="flex items-center font-['Nunito_Sans'] justify-center p-1 duration-200 border border-sky-500 text-lg font-semibold rounded-sm w-24 hover:bg-sky-500 text-sky-500 hover:text-gray-900">
              Hire Me
            </div>
          </a>
          {/* <a
            href="#home"
            className="text-white px-1.5 hover:opacity-80 transition-all duration-100"
          >
            Home
          </a>
          <a
            href="#home"
            className="text-white px-1.5 hover:opacity-80 transition-all duration-100"
          >
            My Skill
          </a>
          <a
            href="#home"
            className="text-white px-1.5 hover:opacity-80 transition-all duration-100"
          >
            Projects
          </a>
          <a
            href="#home"
            className="text-white px-1.5 hover:opacity-80 transition-all duration-100"
          >
            Contact
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
