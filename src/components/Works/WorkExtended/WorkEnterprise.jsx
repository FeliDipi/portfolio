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
        backgroundColor:"#0F595E"
    },
    tap:
    {
        scale:0.95
    }
}

const WorkEnterprise = ({enterprise}) =>
{
    const logoKey = `/src/assets/images/${enterprise.logo}`;

    return (
        <div className="work-extended-enterprise-content center">
            <p className="work-extended-enterprise-text">Enterprise:</p>
            <motion.a 
                className="work-extended-enterprise-logo-content center" 
                href={enterprise.link} 
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