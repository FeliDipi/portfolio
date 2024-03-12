import { useState } from "react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

const MobileMenu = ({currentSection}) =>
{
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () =>
    {
        setIsOpen((prev)=>!prev);
    }

    return (
        <>
            <MenuButton handle={handleMenu} isOpen={isOpen}/>
            <Menu isOpen={isOpen} currentSection={currentSection}/>
        </>
    );
}

export default MobileMenu;