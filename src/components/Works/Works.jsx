import { AnimatePresence } from "framer-motion";

import { useWorks } from "../../hooks/useWorks.js";

import Background from "../Background.jsx";
import WorkPreview from "./WorkPreview/WorkPreview.jsx";
import WorkExtended from "./WorkExtended/WorkExtended.jsx";

const Works = () =>
{
    const {workExpanded} = useWorks();

    return (
        <section id="works" className="center">
            <AnimatePresence>
                {
                    workExpanded?
                        <WorkExtended/>:
                        <WorkPreview/>
                }
            </AnimatePresence>
            <Background className={"work-bg"}></Background>
        </section>
    )
}

export default Works;