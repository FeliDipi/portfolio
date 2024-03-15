import { AnimatePresence } from "framer-motion";

import { useWorks } from "../../hooks/useWorks.js";

import Background from "../Background.jsx";
import WorkPreview from "./WorkPreview.jsx";
import WorkItemExtended from "./WorkExtended/WorkItemExtended.jsx";

const Works = () =>
{
    const {workSelected, handleSelect, handleClose} = useWorks();

    return (
        <section id="works" className="center">
            <AnimatePresence>
                {
                    workSelected?
                        <WorkItemExtended work={workSelected} handleClose={handleClose}/>:
                        <WorkPreview handleSelect={handleSelect}/>
                }
            </AnimatePresence>
            <Background className={"work-bg"}></Background>
        </section>
    )
}

export default Works;