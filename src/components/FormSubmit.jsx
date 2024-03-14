import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

const DELAY_ON_COMPLETE = 2000;

const FormSubmit = ({state, onFinishState}) =>
{
    const [timeOut, setTimeOut] = useState(null);

    const variant =
    {
        hover:
        {
            rotate:-8
        },
        normal:
        {
            rotate:0
        },
        loading:
        {
            scale:0.9,
            opacity:0.75,
            rotate:-8,
            pointerEvents:"none"
        },
        error:
        {
            rotate:[0,-5,5,0],
            pointerEvents:"none"
        },
        success:
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
        loading:
        {
            backgroundColor:"#23B684"
        },
        error:
        {
            backgroundColor:"#E74C3C"
        },
        success:
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
        loading:
        {
            backgroundColor:"#0F595E"
        },
        error:
        {
            backgroundColor:"#C0392B"
        },
        success:
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
        loading:
        {
            text:"Sending...",
            icon:"line-md:loading-alt-loop",
        },
        error:
        {
            text:"Ups",
            icon:"material-symbols:send"
        },
        success:
        {
            text:"Thanks",
            icon:"fa6-solid:hand"
        }
    }

    const handleOnCompleteAnimation = () =>
    {
        if(timeOut || state==="loading") return;

        const newTimeOut = setTimeout(() => {
            onFinishState("normal");
            setTimeOut(null);
          }, DELAY_ON_COMPLETE); 

        setTimeOut(newTimeOut);
    }

    return (
        <motion.div
            className="cv contact-submit-btn center"
            whileHover={"hover"}
            whileTap={{scale:0.95}}
            animate={state}
            transition={{duration:0.25}}
            onAnimationComplete={handleOnCompleteAnimation}
            variants={variant}
        >
            <motion.div variants={variantBg} className="cv-back"></motion.div>
            <motion.button variants={variantButton} type="submit" className="cv-button center">
                <p className="cv-text">{content[state].text}</p>
                <Icon className="cv-icon" icon={content[state].icon}/>
            </motion.button>
        </motion.div>
    );
}

export default FormSubmit;