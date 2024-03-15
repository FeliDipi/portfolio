import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { BUTTON_STATE } from "../../consts/buttonStates.js";

import cv from "../../assets/documents/cv.pdf";

const variantsBtn = 
{
    hover:
    {
        backgroundColor:"#23B684"
    },
    normal:
    {
        backgroundColor:"#032E46"
    }
}

const variants = 
{
    hover:
    {
        scale:0.95
    },
    normal:
    {
        scale:1
    },
    tap:
    {
        scale:0.9
    }
}

const HomeButtonCV = () =>
{
    return (
        <motion.div 
            className="button center"
            initial={BUTTON_STATE.NORMAL}
            whileHover={BUTTON_STATE.HOVER}
            whileTap={BUTTON_STATE.TAP}
            transition={{duration:0.25}}
            variants={variants}
        >
            <div className="button-bg"></div>
            <motion.a 
                href={cv} 
                className="button-content center" 
                download={"Nicolás Felipe Dipierro - CV"}
                variants={variantsBtn}
            >
                <p className="button-content-text">My CV</p>
                <div className="center">
                    <Icon className="button-content-icon" icon="pepicons-pop:cv"/>
                    <Icon className="button-content-icon" icon="material-symbols:download-sharp"/>
                </div>
            </motion.a>
        </motion.div>
    );
}

export default HomeButtonCV;