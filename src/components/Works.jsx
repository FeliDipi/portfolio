import Gallery from "./Gallery.jsx";
import WorkItem from "./WorkItem.jsx";
import WorkInfo from "./WorkInfo.jsx";
import { useGallery } from "../hooks/useGallery.js";

const Works = () =>
{
    const { currentIndex, items } = useGallery();

    return (
        <section id="works" className="center">
            <WorkInfo work={items[currentIndex]} />
            <Gallery items={items}>
                {
                    items.map(item=>(<WorkItem key={item.id} data={item}/>))
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