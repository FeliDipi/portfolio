import { motion, stagger, useAnimate } from "framer-motion";
import MenuButtonSection from "./MenuButtonSection.jsx";
import { useEffect } from "react";

const staggerMenuItems = stagger(0.1, {startDelay:0.15});

const Menu = ({isOpen}) =>
{
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            ".mobile-menu-btn-content",
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
            className="mobile-menu center"
            ref={scope}
        >
            <MenuButtonSection icon="ri:user-fill" section="#home"/>
            <MenuButtonSection icon="ic:sharp-work" section="#works"/>
            <MenuButtonSection icon="ion:mail" section="#contact"/>
        </motion.div>
    );
}

export default Menu;