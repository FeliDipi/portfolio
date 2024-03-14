import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const MenuButton = ({handle, isOpen}) =>
{
    const variants = {
        open:{
            backgroundColor:"#23B684",
            rotate:"0deg"
        },
        close:
        {
            backgroundColor:"#032E46",
            rotate:"-15deg"
        },
        tap:
        {
            scale:0.9
        }
    }

    const icon = isOpen?"ep:close-bold":"jam:menu";

    return (
        <div className="navbar-menu-button-content center">
            <motion.button
                whileTap={"tap"}
                animate={isOpen?"open":"close"} 
                onClick={handle} 
                className="navbar-menu-button"
                variants={variants}
            ></motion.button>
            <Icon className="navbar-menu-button-icon" icon={icon} />
        </div>
    )
}

export default MenuButton;