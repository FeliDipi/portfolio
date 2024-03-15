import { useState } from "react";

import NavbarMobileMenu from "./NavbarMobileMenu.jsx";
import NavbarMobileMenuButton from "./NavbarMobileMenuButton.jsx";

const NavbarMobile = () =>
{
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () =>
    {
        setIsOpen((prev)=>!prev);
    }

    return (
        <div className="navbar-mobile center">
            <NavbarMobileMenuButton handle={handleMenu} isOpen={isOpen}/>
            <NavbarMobileMenu isOpen={isOpen}/>
        </div>
    );
}

export default NavbarMobile;