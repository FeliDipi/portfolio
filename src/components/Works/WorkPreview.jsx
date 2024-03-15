import { useGallery } from "../../hooks/useGallery.js";

import WorkInfoPreview from "./WorkPreview/WorkInfoPreview.jsx";
import Gallery from "../Gallery.jsx";
import WorkItem from "./WorkItem.jsx";

const WorkPreview = ({handleSelect}) =>
{
    const { items } = useGallery();

    return (
        <>
            <WorkInfoPreview/>
            <Gallery>
                {
                    items.map(work=>(<WorkItem key={work.id} data={work} handleSelect={handleSelect}/>))
                }
            </Gallery>
        </>
    );
}

export default WorkPreview;