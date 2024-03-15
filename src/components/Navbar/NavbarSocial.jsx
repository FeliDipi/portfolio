import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { BUTTON_STATE } from "../../consts/buttonStates.js";

const variant = 
{
    normal:
    {
        backgroundColor:"#032E46",
        rotate:"-15deg"
    },
    hover:
    {
        backgroundColor:"#23B684",
        rotate:"0deg"
    },
    tap:
    {
        scale:0.9
    }
}

const NavbarSocial = ({icon,link}) =>
{
    return (
        <motion.div 
            className="navbar-social-button center"
            initial={BUTTON_STATE.NORMAL}
            whileHover={BUTTON_STATE.HOVER}
            whileTap={BUTTON_STATE.TAP}
        >
            <motion.div 
                className="navbar-social-button-bg"
                variants={variant}
            >
            </motion.div>
            <a className="navbar-social-button-link center" href={link} target="_blank" rel="noopener noreferrer">
                <Icon className="navbar-social-button-icon" icon={icon}/>
            </a>
        </motion.div>
    )
}

export default NavbarSocial;