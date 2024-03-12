import { useState } from "react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

const MobileMenu = () =>
{
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () =>
    {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MenuButton handle={handleMenu} isOpen={isOpen}/>
            <Menu isOpen={isOpen}/>
        </>
    );
}

export default MobileMenu;