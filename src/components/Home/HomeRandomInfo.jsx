import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { useRandomInfo } from "../../hooks/useRandomInfo.js";

import AnimatedText from "../AnimatedText.jsx";

const variants =
{
    visible:
    {
        opacity:1,
        y:0
    },
    hidden:
    {
        opacity:0,
        y:5
    }
}

const HomeRandomInfo = () =>
{
    const { dope, controls, handlePre, handleNextDope } = useRandomInfo();

    return (
        <div className="home-info-random center">
            <motion.div
                initial="visible"
                animate={controls}
                variants={variants}
                transition={{duration:0.25}}
            >
                <Icon className="home-info-random-icon" icon={dope.icon} />
            </motion.div>
            <AnimatedText className={"home-info-random-text"} text={dope.text} repeatDelay={7500} preHandle={handlePre} postHandle={handleNextDope}/>
        </div>
    );
}

export default HomeRandomInfo;