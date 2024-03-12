import { Icon } from "@iconify/react";
import { useDate } from "../hooks/useDate.js";

import AnimatedText from "./AnimatedText.jsx";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useGallery } from "../hooks/useGallery.js";

const WorkInfo = () =>
{
    const { currentItem } = useGallery();

    const work = currentItem;

    const {distance} = useDate(work.date);
    const controls = useAnimation();

    const position = work.position;
    const name = work.name;
    const logo = `/src/assets/images/${ work.enterprise.logo}`;
    const tecnologies = work.tecnologies;

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

    useEffect(()=>
    {
        const animation = async () =>
        {
            await controls.start("hidden");
            controls.start("visible");
        }

        animation();
    },[work])
    
    return (
        <div className="works-info center">
            <AnimatedText className="work-info-header" text={`${distance} - ${position}`} />
            <AnimatedText className="work-info-title" text={name} />
            <motion.div
                initial="visible"
                animate={controls}
                variants={variants}
                transition={{duration:0.25}}
                className="work-info-footer center"
            >
                <img className="work-info-logo" src={logo}></img>
                <div className="work-info-tecnologies center">
                    {
                        tecnologies.map((icon, idx)=>(<Icon className="work-info-icon" key={idx} icon={icon}/>))
                    }
                </div>
            </motion.div>
        </div>
    );
}

export default WorkInfo;