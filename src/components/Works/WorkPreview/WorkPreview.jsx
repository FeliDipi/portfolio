import { useWorks } from "../../../hooks/useWorks.js";

import WorkInfoPreview from "./WorkInfoPreview.jsx";
import Gallery from "../../Gallery.jsx";
import WorkItem from "./WorkItem.jsx";

const WorkPreview = () =>
{
    const { works, handleSelect } = useWorks();

    return (
        <div className="works-preview">
            <WorkInfoPreview/>
            <Gallery onChangeSlide={handleSelect}>
                {
                    works.map((work,idx)=>(<WorkItem key={work.id} data={work} index={idx} length={works.length}/>))
                }
            </Gallery>
        </div>
    );
}

export default WorkPreview;