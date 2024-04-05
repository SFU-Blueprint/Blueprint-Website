import {Link} from "react-router-dom";
import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import './Logo.css';

const Logo = ({colour = '#0177E8'}) => {
    return (
        <Link
            to="/"
            className="Logo-Section"
        >
            <LogoIcon style={{ fill: colour }} className="Logo-Style" />
            <span style={{ color: colour }} className="Logo-Font">
                blueprint
            </span>
        </Link>
    );
}

export default Logo;