import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const SocialButton = ({icon,link}) =>
{
    const variant = 
    {
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

    return (
        <motion.div 
            className="social-button center"
            initial={"close"}
            whileHover={"open"}
            whileTap={"tap"}
        >
            <motion.div 
                className="social-button-bg"
                variants={variant}
            >
            </motion.div>
            <a className="social-button-link center" target="_blank" href={link}>
                <Icon className="social-button-icon" icon={icon}/>
            </a>
        </motion.div>
    )
}

export default SocialButton;