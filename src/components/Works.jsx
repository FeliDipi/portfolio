import { works } from "../data/works.json";
import Gallery from "./Gallery.jsx";
import WorkItem from "./WorkItem.jsx";
import WorkInfo from "./WorkInfo.jsx";

const Works = () =>
{
    return (
        <section id="works" className="center">
            <WorkInfo work={works[0]}/>
            <Gallery items={works}>
                {
                    works.map(work=>(<WorkItem key={work.id} data={work}/>))
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