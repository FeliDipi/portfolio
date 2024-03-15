import { motion } from "framer-motion";

import { usePreview } from "../../../hooks/usePreview.js";
import { useDate } from "../../../hooks/useDate.js";

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
    const { work, controls } = usePreview();

    const {distance} = useDate(work.date);
    const header = `${distance} - ${work.status} - ${work.position}`
    
    return (
        <div className="works-info center">
            <AnimatedText className="work-info-header" text={header} />
            <AnimatedText className="work-info-title" text={work.name} />
            <motion.div
                initial="visible"
                animate={controls}
                variants={variants}
                transition={{duration:0.25}}
                className="work-info-footer center"
            >
                {
                    work.enterprise && <WorkEnterprisePreview logo={work.enterprise.logo}/>
                }
                <WorkTecnologiesPreview tecnologies={work.tecnologies}/>
            </motion.div>
        </div>
    );
}

export default WorkInfoPreview;