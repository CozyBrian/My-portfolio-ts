import React from "react";

const Header = () => {
  return (
    <div className="h-14 bg-black opacity-70 flex items-center justify-center">
      <div className="container flex flex-row justify-between items-center h-full px-2 sm:px-24">
        <h4 className="text-white opacity-100 text-xl">Brian Newton</h4>
        <div>
          <a
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
