import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { BUTTON_STATE } from "../../consts/buttonStates.js";

const variant =
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
    },
    load:
    {
        scale:0.9,
        opacity:0.75,
        pointerEvents:"none"
    },
    error:
    {
        rotate:[0,-5,5,0],
        pointerEvents:"none"
    },
    ok:
    {
        rotate:[0,-5,5,0],
        scale:[1,1.1,1],
        pointerEvents:"none"
    }
}

const variantButton =
{
    hover:
    {
        backgroundColor:"#23B684"
    },
    normal:
    {
        backgroundColor:"#032E46"
    },
    load:
    {
        backgroundColor:"#23B684"
    },
    error:
    {
        backgroundColor:"#E74C3C"
    },
    ok:
    {
        backgroundColor:"#23B684"
    }
};

const variantBg =
{
    hover:
    {
        backgroundColor:"#0F595E"
    },
    normal:
    {
        backgroundColor:"#0F595E"
    },
    load:
    {
        backgroundColor:"#0F595E"
    },
    error:
    {
        backgroundColor:"#C0392B"
    },
    ok:
    {
        backgroundColor:"#0F595E"
    }
};

const content =
{
    normal:
    {
        text:"Send",
        icon:"material-symbols:send",
    },
    load:
    {
        text:"Sending...",
        icon:"line-md:loading-alt-loop",
    },
    error:
    {
        text:"Ups",
        icon:"material-symbols:send"
    },
    ok:
    {
        text:"Thanks",
        icon:"fa6-solid:hand"
    }
}

const ContactSubmit = ({state}) =>
{
    return (
        <motion.div
            className="button center contact-submit-btn"
            initial={BUTTON_STATE.NORMAL}
            whileHover={BUTTON_STATE.HOVER}
            whileTap={BUTTON_STATE.TAP}
            animate={state}
            transition={{duration:0.25}}
            variants={variant}
        >
            <motion.div variants={variantBg} className="button-bg"></motion.div>
            <motion.button variants={variantButton} type="submit" className="button-content center">
                <p className="button-content-text">{content[state].text}</p>
                <Icon className="button-content-icon" icon={content[state].icon}/>
            </motion.button>
        </motion.div>
    );
}

export default ContactSubmit;