import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { BUTTON_STATE } from "../../consts/buttonStates.js";

const variants = 
{
    normal:
    {
        backgroundColor:"#032E46",
        rotate:"-15deg"
    },
    hover:{
        backgroundColor:"#23B684",
        rotate:"0deg"
    },
    tap:
    {
        scale:0.9
    }
}

const NavbarMobileMenuButton = ({handle, isOpen}) =>
{
    const icon = isOpen?"ep:close-bold":"jam:menu";

    return (
        <div className="navbar-button-menu-content center">
            <motion.button
                className="navbar-button-menu"
                onClick={handle}
                initial={BUTTON_STATE.NORMAL}
                whileHover={BUTTON_STATE.HOVER} 
                whileTap={BUTTON_STATE.TAP}
                animate={
                    isOpen?
                        BUTTON_STATE.HOVER:
                        BUTTON_STATE.NORMAL
                    } 
                variants={variants}
            ></motion.button>
            <Icon className="navbar-button-menu-icon" icon={icon} />
        </div>
    )
}

export default NavbarMobileMenuButton;