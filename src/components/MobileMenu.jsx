import { useState } from "react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

const MobileMenu = () =>
{
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () =>
    {
        setIsOpen((prev)=>!prev);
    }

    return (
        <div className="navbar-mobile center">
            <MenuButton handle={handleMenu} isOpen={isOpen}/>
            <Menu isOpen={isOpen}/>
        </div>
    );
}

export default MobileMenu;