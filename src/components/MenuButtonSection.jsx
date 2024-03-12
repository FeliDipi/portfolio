import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useSections } from "../hooks/useSections.js";

export const MenuButtonSection = ({icon, section}) =>
{
    const { currentSection } = useSections();

    const variantBg = 
    {
        select:{
            backgroundColor:"#23B684",
            rotate:"0deg"
        },
        unselect:
        {
            backgroundColor:"#032E46",
            rotate:"15deg"
        },
    }

    return (
        <motion.div
            initial={{x:"200%"}}
            animate={currentSection===section?"select":"unselect"}
            whileTap={{scale:0.95}}
            whileHover={"select"}
            className="mobile-menu-btn-content"
        >
            <motion.div 
                className="mobile-menu-btn-bg"
                variants={variantBg}
            >
            </motion.div>
            <a className="mobile-menu-btn center" href={`#${section}`}>
                <Icon className="mobile-menu-btn-icon" icon={icon}/>
            </a>
        </motion.div>
    );
}

export default MenuButtonSection;