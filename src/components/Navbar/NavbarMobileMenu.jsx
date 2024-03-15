import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

import NavbarButtonSection from "./NavbarButtonSection.jsx";

const staggerMenuItems = stagger(0.1, {startDelay:0.15});

const NavbarMobileMenu = ({isOpen}) =>
{
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            ".navbar-button-section-content",
            isOpen
                ? { x:"0%" }
                : { x:"200%" },
            {
                duration: 0.2,
                delay: staggerMenuItems,
            }
        );

      }, [isOpen]);

    return (
        <motion.div 
            className="navbar-mobile-menu center"
            ref={scope}
        >
            <NavbarButtonSection icon="ri:user-fill" section="home"/>
            <NavbarButtonSection icon="ic:sharp-work" section="works"/>
            <NavbarButtonSection icon="ion:mail" section="contact"/>
        </motion.div>
    );
}

export default NavbarMobileMenu;