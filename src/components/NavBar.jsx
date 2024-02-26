import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as MenuHamburgerIcon } from "../assets/icons/hamburger.svg";
import { ReactComponent as MenuXIcon } from "../assets/icons/x.svg";
import Logo from "./shared/Logo";

const NavBar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpened((isMenuOpened) => !isMenuOpened);
  };
  const currentPath = useLocation().pathname;

  const routes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "For Students", path: "/students" },
    { name: "For Nonprofits", path: "/nonprofits" },
    { name: "Sponsor Us", path: "/sponsors" },
  ];

  return (
    <nav className="flex justify-center">
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
          currentPath={currentPath}
        />
      </div>
    </nav>
  );
};

function MenuButton({ isMenuOpened, toggleMenu, visibility }) {
  return (
    <button className={visibility} onClick={toggleMenu}>
      { isMenuOpened ? <MenuXIcon /> : <MenuHamburgerIcon /> }
    </button>
  );
}

function NavLinks({ routes, visibility, currentPath }) {
  return (
    <div
      className={`flex flex-col items-center max-lg:space-y-4 max-lg:pb-4 text-blueprint-black font-poppins lg:flex-row lg:space-x-12 ${visibility}`}
    >
      {routes.map((route, index) => (
        <Link
          key={index}
          to={route.path}
          className={`hover:text-blueprint-blue hover:underline hover:font-semibold hover:cursor-pointer ${route.path === currentPath && "text-blueprint-blue underline font-semibold"} ${index === 0 && "lg:hidden"}`}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
