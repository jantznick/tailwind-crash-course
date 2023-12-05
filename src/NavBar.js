import React from "react";
import '../public/app.css';
import NavMenuItem from "./NavMenuItem";

const NavBar = () => {
    const menuItems = ['Pricing', 'Product', 'About Us', 'Careers', 'Community'];
    
	return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                {/* logo */}
                <div className="pt2">
                    <img src="img/logo.svg" alt="" />
                </div>
                {/* menu items */}
                <div className="hidden md:flex space-x-6">
                    {menuItems.map((item, i) => (
                        <NavMenuItem title={item} key={i} />
                    ))}
                </div>
                {/* button */}
                <a href="" className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                    Get Started
                </a>
            </div>
        </nav>
	)
}

export default NavBar