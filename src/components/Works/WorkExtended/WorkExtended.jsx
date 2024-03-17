import { motion } from "framer-motion";

import images from "../../../hooks/useImage.js";
import { useWorks } from "../../../hooks/useWorks.js";

import WorkButton from "../WorkButton.jsx";
import WorkInfo from "./WorkInfo.jsx";

const WorkExtended = () =>
{
    const { workSelected, handleClose } = useWorks();

    const imageKey = `/src/assets/images/${ workSelected.gallery[0] }`;

    return (
        <motion.div 
            className="work-extended center"
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <WorkButton className={"work-button-close"} icon={"ion:open"} handleOnClick={handleClose}/>
            <div className="work-extended-gallery-content center">
                <img className="work-extended-gallery" src={images[imageKey]}/>
            </div>
            <WorkInfo work={workSelected}/>
        </motion.div>
    );
}

export default WorkExtended;