import { useGallery } from "../../hooks/useGallery.js";

import WorkInfo from "./WorkInfo.jsx";
import Gallery from "../Gallery.jsx";
import WorkItem from "./WorkItem.jsx";

const WorkPreview = ({selectHandle}) =>
{
    const { items } = useGallery();

    return (
        <>
            <WorkInfo/>
            <Gallery>
                {
                    items.map(work=>(<WorkItem key={work.id} data={work} selectHandle={selectHandle}/>))
                }
            </Gallery>
        </>
    );
}

export default WorkPreview;