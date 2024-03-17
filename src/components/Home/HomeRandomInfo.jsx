import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { useInfo } from "../../hooks/useInfo.js";

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
    const { dope, controls, handlePre, handleNextDope } = useInfo();

    return (
        <motion.div className="home-info-random center" layout>
            <div className="home-info-random-bg"></div>
            <div className="home-info-random-content center">
                <motion.div
                    initial="visible"
                    animate={controls}
                    variants={variants}
                    transition={{duration:0.25}}
                    className="center"
                >
                    <Icon className="home-info-random-icon" icon={dope.icon} />
                </motion.div>
                <AnimatedText className={"home-info-random-text"} text={dope.text} repeatDelay={7500} preHandle={handlePre} postHandle={handleNextDope}/>
            </div>
        </motion.div>
    );
}

export default HomeRandomInfo;