import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

const FormSubmit = () =>
{
    const states = 
    {
        normal:
        {
            background:"#032E46",
            backgroundBack:"#0F595E",
            text:"Send",
            icon:"material-symbols:send"
        },
        error:
        {
            background:"#E74C3C",
            backgroundBack:"#C0392B",
            text:"Ups",
            icon:"material-symbols:send"
        },
        loading:
        {
            background:"#23B684",
            backgroundBack:"#0F595E",
            icon:"eos-icons:bubble-loading"
        },
        success:
        {
            background:"#23B684",
            backgroundBack:"#0F595E",
            text:"Thanks",
            icon:"fa6-solid:hand"
        }
    }

    const state = states["normal"];

    return (
        <motion.div 
            className="cv center"
            whileHover={{rotate:-8}}
            whileTap={{scale:0.95}}
        >
            <motion.div animate={{backgroundColor:state.backgroundBack}} className="cv-back"></motion.div>
            <motion.button animate={{backgroundColor:state.background}} type="submit" className="cv-button center" download={"Nicolás Felipe Dipierro - CV"}>
                {
                    state.text && <p className="cv-text">{state.text}</p>
                }
                <Icon className="cv-icon" icon={state.icon}/>
            </motion.button>
        </motion.div>
    );
}

export default FormSubmit;