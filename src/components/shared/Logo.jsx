import {Link} from "react-router-dom";
import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

const Logo = ({colour = '#0177E8'}) => {
    return (
        <Link
            to="/"
            className="flex space-x-2 hover:opacity-80 hover:cursor-pointer"
        >
            <LogoIcon style={{ fill: colour }} />
            <span style={{ color: colour }} className="font-poppins text-lg font-semibold">
                blueprint
            </span>
        </Link>
    );
}

export default Logo;