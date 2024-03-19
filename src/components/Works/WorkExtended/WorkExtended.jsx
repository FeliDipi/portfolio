import { motion } from "framer-motion";

import images from "../../../hooks/useImage.js";
import { useWorks } from "../../../hooks/useWorks.js";

import WorkButton from "../WorkButton.jsx";
import WorkInfo from "./WorkInfo.jsx";
import Gallery from "../../Gallery/Gallery.jsx";

const WorkExtended = () =>
{
    const { workSelected, handleClose } = useWorks();

    return (
        <motion.div 
            className="work-extended center"
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <WorkButton className={"work-button-close"} icon={"ion:open"} handleOnClick={handleClose}/>
            <Gallery className={"work-extended-gallery"}>
                {
                    workSelected.gallery.map((imgTag, idx) => {
                        const imageKey = `/src/assets/images/${ imgTag }`;
                        return (
                            <div key={idx} className="gallery-item work-extended-item center">
                                <img className="work-extended-img-bg" src={images[imageKey]}/>
                                <img className="work-extended-img" src={images[imageKey]}/>
                            </div>
                        )
                    })
                }
            </Gallery>
            <WorkInfo work={workSelected}/>
        </motion.div>
    );
}

export default WorkExtended;