import { Icon } from "@iconify/react";
import { works } from "../data/works.json";
import Gallery from "./Gallery.jsx";
import WorkItem from "./WorkItem.jsx";

const Works = () =>
{
    const workData = works[0];

    const position = workData.position;
    const name = workData.name;
    const logo = `/src/assets/images/${ workData.enterprise.logo}`;
    const tecnologies = workData.tecnologies;

    const date = new Date(workData.date);
    const dateNow = new Date();

    var year1 = date.getFullYear();
    var month1 = date.getMonth();
    var day1 = date.getDate();

    var year2 = dateNow.getFullYear();
    var month2 = dateNow.getMonth();
    var day2 = dateNow.getDate();

    var yearDistance = Math.abs(year2 - year1);
    var monthDistance = Math.abs(month2 - month1);
    var dayDistance = Math.abs(day2 - day1);

    var distance = `${dayDistance} days ago`;

    if(yearDistance>0) distance = `${yearDistance} years ago`;
    else if(monthDistance>0) distance = `${monthDistance} month ago`;

    return (
        <section id="works" className="center">
            <div className="works-info">
                <p>{`${distance} - ${position}`}</p>
                <p>{name}</p>
                <div>
                    <img src={logo}></img>
                    <div>
                        {
                            tecnologies.map((icon, idx)=>(<Icon key={idx} icon={icon}/>))
                        }
                    </div>
                </div>
            </div>
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