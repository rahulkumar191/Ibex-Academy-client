import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SecondaryButton from "./common/SecondaryButton";
import { Link } from "react-router-dom";

const Header = ({isUser}) => {
  const [screenWith, setScreenWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(true);
  let Links = [
    { name: "About", link: "/user/about" },
    { name: "Courses", link: "/user/courses" },
    { name: "My Courses", link: "/user/myCourses" },
    { name: "Cart", link: "/user/cart" },
  ];

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  //   console.log(screenWith)

  return (
    <div>
      {screenWith < 768 && (
        <MobileMenu open={open} setOpen={setOpen} Links={Links} isUser={isUser} ></MobileMenu>
      )}
      {screenWith > 768 && (
        <DesktopMenu open={open} setOpen={setOpen} Links={Links} isUser={isUser} ></DesktopMenu>
      )}
    </div>
  );
};

const MobileMenu = ({ Links, open, setOpen, isUser }) => {
  return (
    <div className="bg-primary-color p-3">
      <nav className="flex justify-between items-center pb-3">
        <div onClick={() => setOpen(!open)}>
          <i className="text-3xl fa-solid fa-bars text-ternary-color"></i>
        </div>
        <div>
          <Logo></Logo>
        </div>
        <div>
          {!isUser && <Link to={'/user/login'}>
            <SecondaryButton>LOGIN</SecondaryButton>
          </Link>}
          {isUser && <Link to={'/user/logout'}>
            <SecondaryButton>LOGOUT</SecondaryButton>
          </Link>}
        </div>
      </nav>
      <div>
      <SearchBar></SearchBar>
      </div>

      <ul className = {`bg-ternary-color border-2 border-r-primbg-primary-color absolute top-0 w-1/2 h-screen transition-all duration-500 ease-in ${open ? 'left-[-100%] ':'left-0'}`} >
          {Links.map((link) => {
            return (
              <li className="mb-3">
                <Link to={link.link} className="cursor-pointer transition-all duration-200 hover:text-primary-color">
                  {link.name}
                </Link>
              </li>
            );
          })}
          <div className="absolute top-1 right-1  " onClick={() => setOpen(!open)}>
          <i className="cursor-pointer hover:rotate-180 transition-all duration-300 text-3xl fa-solid fa-xmark"></i>
          </div>
        </ul>

    </div>
  );
};

const DesktopMenu = ({ Links, isUser }) => {
  return (
    <div key={'desktop'} className="flex justify-between items-center gap-5 bg-primary-color text-ternary-color p-3">
      <div className="flex justify-between items-center">
        <Logo></Logo>
      </div>
      <div className="text-black flex-1 max-w-md">
        <SearchBar></SearchBar>
      </div>
      <nav className="flex gap-5 items-center ">
        <ul className="flex gap-5 my-4">
          {Links.map((link) => {
            return (
              <li className="mb-3">
                <Link to={link.link} className="cursor-pointer transition-all duration-200 hover:text-secondary-color">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
        {!isUser && <Link to={'/user/login'}>
            <SecondaryButton>LOGIN</SecondaryButton>
          </Link>}
          {isUser && <Link to={'/user/logout'}>
            <SecondaryButton>LOGOUT</SecondaryButton>
          </Link>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
