import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { BUTTON_STATE, BUTTON_SECTION_STATE } from "../../consts/buttonStates.js";

import { useSections } from "../../hooks/useSections.js";

const variants = 
{
    normal:
    {
        x:"200%"
    },
    tap:
    {
        scale:0.95
    }
}

const variantBg = 
{
    select:
    {
        backgroundColor:"#23B684",
        rotate:"0deg"
    },
    unselect:
    {
        backgroundColor:"#032E46",
        rotate:"15deg"
    }
}

export const NavbarButtonSection = ({icon, section}) =>
{
    const { currentSection } = useSections();

    return (
        <motion.div
            initial={BUTTON_STATE.NORMAL}
            animate={
                currentSection===section?
                    BUTTON_SECTION_STATE.SELECT:
                    BUTTON_SECTION_STATE.UNSELECT
            }
            whileTap={BUTTON_STATE.TAP}
            whileHover={BUTTON_SECTION_STATE.SELECT}
            variants={variants}
            className="navbar-button-section-content"
        >
            <motion.div 
                className="navbar-button-section-bg"
                variants={variantBg}
            >
            </motion.div>
            <a className="navbar-button-section center" href={`#${section}`}>
                <Icon className="navbar-button-section-icon" icon={icon}/>
            </a>
        </motion.div>
    );
}

export default NavbarButtonSection;