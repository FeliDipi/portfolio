import WorkPreview from "./WorkPreview.jsx";
import WorkExtended from "./WorkExtended.jsx";
import { useWorks } from "../../hooks/useWorks.js";
import { AnimatePresence } from "framer-motion";

const Works = () =>
{
    const {workSelected, handleSelect, handleClose} = useWorks();

    return (
        <section id="works" className="center">
            <AnimatePresence>
                {
                    workSelected?
                        <WorkExtended work={workSelected} close={handleClose}/>:
                        <WorkPreview selectHandle={handleSelect}/>
                }
            </AnimatePresence>
            <div className="bg work-bg center">
                <div className="bg-border-back"></div>
                <div className="bg-border-top"></div>
                <div className="bg-border-bottom"></div>
                <div className="bg-content"></div>
            </div>
        </section>
    )
}

export default Works;