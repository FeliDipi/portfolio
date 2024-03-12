import { useState } from "react";
import WorkPreview from "./WorkPreview.jsx";
import WorkExtended from "./WorkExtended.jsx";

const Works = () =>
{
    const [workSelected, setWorkSelected] = useState(null);
    const [extended, setIsExtended] = useState(false);

    const handleSelect = (work) =>
    {
        setWorkSelected(work);
        setIsExtended(true);
    }

    const handleClose = () =>
    {
        setIsExtended(false);
    }

    return (
        <section id="works" className="center">
            {
                extended?<WorkExtended work={workSelected} close={handleClose}/>:<WorkPreview selectHandle={handleSelect}/>
            }
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