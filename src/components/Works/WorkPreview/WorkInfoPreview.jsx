import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import { useDate } from "../../../hooks/useDate.js";
import { useWorks } from "../../../hooks/useWorks.js";

import AnimatedText from "../../AnimatedText.jsx";
import WorkEnterprisePreview from "./WorkEnterprisePreview.jsx";
import WorkTecnologiesPreview from "./WorkTecnologiesPreview.jsx";

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

const WorkInfoPreview = () =>
{
    const controls = useAnimation();
    const { workSelected } = useWorks();

    const {distance} = useDate(workSelected.time.date);
    const { status, position } = workSelected.job;

    const header = `${distance} - ${status} - ${position}`

    useEffect(()=>
    {
        const animation = async () =>
        {
            await controls.start("hidden");
            controls.start("visible");
        }

        animation();
    },[workSelected]);
    
    return (
        <div className="works-info center">
            <AnimatedText className="work-info-header" text={header} />
            <AnimatedText className="work-info-title" text={workSelected.name} />
            <motion.div
                initial="visible"
                animate={controls}
                variants={variants}
                transition={{duration:0.25}}
                className="work-info-footer center"
            >
                {
                    workSelected.enterprise && <WorkEnterprisePreview logo={workSelected.enterprise.logo}/>
                }
                <WorkTecnologiesPreview tecnologies={workSelected.tecnologies}/>
            </motion.div>
        </div>
    );
}

export default WorkInfoPreview;