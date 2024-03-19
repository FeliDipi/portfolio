import { motion } from "framer-motion";
import { BUTTON_STATE } from "../../../consts/buttonStates.js";

import images from "../../../hooks/useImage.js";

const variants = 
{
    hover:
    {
        backgroundColor:"#043D5D",
        scale:0.95
    },
    normal:
    {
        backgroundColor:"#032E46"
    },
    tap:
    {
        scale:0.95
    }
}

const WorkEnterprise = ({enterprise}) =>
{
    const { logo, link, my } = enterprise;

    const logoKey = `/src/assets/images/${logo}`;
    const title = my?"My little studio":"Enterprise";

    return (
        <div className="work-extended-enterprise-content center">
            <p className="work-extended-enterprise-text">{title}:</p>
            <motion.a 
                className="work-extended-enterprise-logo-content center" 
                href={link} 
                target="_blank"
                rel="noopener noreferrer"
                initial={BUTTON_STATE.NORMAL}
                whileHover={BUTTON_STATE.HOVER}
                whileTap={BUTTON_STATE.TAP}
                variants={variants}
            >
                <img className="work-extended-enterprise-logo" src={images[logoKey]}/>
            </motion.a>
        </div>
    );
}

export default WorkEnterprise;