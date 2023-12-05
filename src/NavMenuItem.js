import React from "react";
import '../public/app.css';

const NavMenuItem = ({title}) => {
	return (
        <a href="#" className="hover:text-darkGrayishBlue">{title}</a>
	)
}

export default NavMenuItem