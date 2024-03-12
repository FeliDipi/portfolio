import Gallery from "./Gallery.jsx";
import WorkItem from "./WorkItem.jsx";
import WorkInfo from "./WorkInfo.jsx";
import { useGallery } from "../hooks/useGallery.js";

const Works = () =>
{
    const { items } = useGallery();

    return (
        <section id="works" className="center">
            <WorkInfo/>
            <Gallery>
                {
                    items.map(work=>(<WorkItem key={work.id} data={work}/>))
                }
            </Gallery>
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