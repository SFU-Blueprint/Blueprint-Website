import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { ReactComponent as MenuHamburgerIcon } from "../assets/icons/hamburger.svg";
import { ReactComponent as MenuXIcon } from "../assets/icons/x.svg";

const NavBar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpened((isMenuOpened) => !isMenuOpened);
  };

  const routes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "For Students", path: "/students" },
    { name: "For Nonprofits", path: "/nonprofits" },
    { name: "Sponsor Us", path: "/sponsors" },
  ];

  return (
    <nav className="flex w-screen justify-center">
      <div className="flex flex-col justify-between max-lg:flex-grow lg:flex-row lg:w-[80rem] lg:px-20">
        <div className="flex justify-between items-center py-4 px-4">
          <Logo />
          <MenuButton
            visibility="lg:hidden"
            isMenuOpened={isMenuOpened}
            toggleMenu={toggleMenu}
          />
        </div>
        <NavLinks
          visibility={!isMenuOpened && "max-lg:hidden"}
          routes={routes}
        />
      </div>
    </nav>
  );
};

function MenuButton({ isMenuOpened, toggleMenu, visibility }) {
  return (
    <button className={visibility} onClick={toggleMenu}>
      {{ isMenuOpened } ? <MenuHamburgerIcon /> : <MenuXIcon />}
    </button>
  );
}

function Logo() {
  return (
    <Link
      to="/"
      className="flex space-x-2 hover:opacity-80 hover:cursor-pointer"
    >
      <LogoIcon />
      <span className="text-blue-500 font-poppins text-lg font-semibold">
        blueprint
      </span>
    </Link>
  );
}

function NavLinks({ routes, visibility }) {
  return (
    <div
      className={`flex flex-col items-center max-lg:space-y-4 max-lg:pb-4 text-gray-600 font-poppins lg:flex-row lg:space-x-12 ${visibility}`}
    >
      {routes.map((route, index) => (
        <Link
          key={index}
          to={route.path}
          className={`hover:text-blue-500 hover:underline hover:font-semibold hover:cursor-pointer ${index === 0 && "lg:hidden"}`}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
