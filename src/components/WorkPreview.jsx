import Gallery from "./Gallery.jsx";
import WorkItem from "./WorkItem.jsx";
import WorkInfo from "./WorkInfo.jsx";
import { useGallery } from "../hooks/useGallery.js";

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