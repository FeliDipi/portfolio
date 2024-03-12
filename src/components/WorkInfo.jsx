import { Icon } from "@iconify/react";
import { useDate } from "../hooks/useDate";

const WorkInfo = ({work}) =>
{
    const {distance} = useDate(work.date);

    const position = work.position;
    const name = work.name;
    const logo = `/src/assets/images/${ work.enterprise.logo}`;
    const tecnologies = work.tecnologies;
    
    return (
        <div className="works-info center">
            <p className="work-info-header">{`${distance} - ${position}`}</p>
            <p className="work-info-title">{name}</p>
            <div className="work-info-footer center">
                <img className="work-info-logo" src={logo}></img>
                <div className="work-info-tecnologies center">
                    {
                        tecnologies.map((icon, idx)=>(<Icon className="work-info-icon" key={idx} icon={icon}/>))
                    }
                </div>
            </div>
        </div>
    );
}

export default WorkInfo;