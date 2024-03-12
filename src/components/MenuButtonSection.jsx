import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const MenuButtonSection = ({icon, section}) =>
{
    return (
        <motion.div
            initial={{x:"200%"}}
            className="mobile-menu-btn-content"
        >
            <div className="mobile-menu-btn-bg"></div>
            <a className="mobile-menu-btn center" href={section}>
                <Icon className="mobile-menu-btn-icon" icon={icon}/>
            </a>
        </motion.div>
    );
}

export default MenuButtonSection;