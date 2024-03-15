import { AnimatePresence } from "framer-motion";

import { useWorks } from "../../hooks/useWorks.js";

import Background from "../Background.jsx";
import WorkPreview from "./WorkPreview.jsx";
import WorkExtended from "./WorkExtended.jsx";

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
            <Background className={"work-bg"}></Background>
        </section>
    )
}

export default Works;