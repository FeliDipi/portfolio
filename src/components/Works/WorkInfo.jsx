import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import images from "../../hooks/useImage.js";

import { useDate } from "../../hooks/useDate.js";
import { useGallery } from "../../hooks/useGallery.js";

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

const WorkInfo = () =>
{
    const { currentItem } = useGallery();

    const work = currentItem;

    const controls = useAnimation();
    const {distance} = useDate(work.date);
    const name = work.name;
    const status = work.status;
    const position = work.position;
    const logoKey = `/src/assets/images/${ work.enterprise.logo}`;
    const tecnologies = work.tecnologies;

    const header = `${distance} - ${status} - ${position}`

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
            <AnimatedText className="work-info-header" text={header} />
            <AnimatedText className="work-info-title" text={name} />
            <motion.div
                initial="visible"
                animate={controls}
                variants={variants}
                transition={{duration:0.25}}
                className="work-info-footer center"
            >
                <img className="work-info-logo" src={images[logoKey]}></img>
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