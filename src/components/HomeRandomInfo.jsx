import { Icon } from "@iconify/react";
import { random } from "../data/random.json";
import { useState } from "react";
import { motion , useAnimation } from "framer-motion";
import AnimatedText from "./AnimatedText.jsx";

const HomeRandomInfo = () =>
{
    const [index, setIndex] = useState(0);
    const [dope, setDope] = useState(random[0]);

    const controls = useAnimation();

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

    const handlePre = () =>
    {
        controls.start("hidden");
    }

    const handleNextDope = () =>
    {
        const newIndex = (index+1) % random.length;
        setIndex(newIndex);
        
        const newDope = random[newIndex];
        setDope(newDope);

        controls.start("visible");
    }

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