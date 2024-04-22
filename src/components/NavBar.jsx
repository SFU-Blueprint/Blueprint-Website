import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as MenuHamburgerIcon } from "../assets/icons/hamburger.svg";
import { ReactComponent as MenuXIcon } from "../assets/icons/x.svg";
import Logo from "./shared/Logo";

const NavBar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isNavLinkClicked, setIsLinkClicked] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpened((isMenuOpened) => !isMenuOpened);
  };

  const toggleLink = () => {
    setIsLinkClicked((isNavLinkClicked) => !isNavLinkClicked );
  };

  const currentPath = useLocation().pathname;

  const routes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projectspage" },
    { name: "For Students", path: "/students" },
    { name: "For Nonprofits", path: "/nonprofits" },
    { name: "Sponsor Us", path: "/sponsors" },
  ];

  console.log(isNavLinkClicked);
  return (
    <nav className="flex justify-center">
      <div className="flex flex-col justify-between max-lg:flex-grow lg:flex-row lg:w-[80rem] lg:px-20">
        <div className="flex justify-between items-center py-4 px-4">
          <Logo />
          <MenuButton
            visibility="lg:hidden"
            isMenuOpened={isMenuOpened}
            toggleMenu={toggleMenu}
            toggleLink={toggleLink}
          />
        </div>
        <NavLinks
         visibility={!isNavLinkClicked && !isMenuOpened && "max-lg:hidden"}
         routes={routes}
         isNavLinkClicked = {isNavLinkClicked}
         toggleMenu={toggleMenu}
         toggleLink={toggleLink}
         currentPath={currentPath}
        />

      </div>
    </nav>
  );
};

function MenuButton({ isMenuOpened, visibility, toggleLink, toggleMenu}) {
  return (
    <button className={visibility} onClick={() => { toggleLink(); toggleMenu(); }}>
      { isMenuOpened ? <MenuXIcon /> : <MenuHamburgerIcon /> }
    </button>
    
  );
  
}

function NavLinks({ routes, visibility, currentPath, toggleLink, toggleMenu}) {

  return (
    <div
      className={`flex flex-col items-center max-lg:space-y-4 max-lg:pb-4 text-blueprint-black font-poppins lg:flex-row lg:space-x-12 ${visibility}`}
    >
      {/* additional div to contain the invisible and visible text */}
      {/* position is relative for the absolute positon of child element to follow parent, not the whole page */}
      {routes.map((route, index) => (
        <div className="relative">
          {/* the first div is hidden, and to simulate the space occupied by bold text */}
          <div
            className={`invisible font-semibold  ${index === 0 && "lg:hidden"}`}
          >
            {route.name}
          </div>
          {/* the second tag (link) is visible, and absolute position its top edge to the 1/2 of the container, 
          then translate upwards by its 1/2 of height to be centered vertically */}
            <Link
            key={index}
            to={route.path}
            onClick={() => { toggleLink(); toggleMenu(); }}
            className={`hover:text-blueprint-blue hover:underline hover:font-semibold hover:cursor-pointer ${route.path === currentPath && "text-blueprint-blue underline font-semibold"} ${index === 0 && "lg:hidden"}`}
            >
            {route.name}
          </Link>
        </div>

      ))}
    </div>
  );
}

export default NavBar;
