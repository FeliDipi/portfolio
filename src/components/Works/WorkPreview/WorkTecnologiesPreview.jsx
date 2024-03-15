import { Icon } from "@iconify/react";

const WorkTecnologiesPreview = ({tecnologies}) =>
{
    return (
        <div className="work-info-tecnologies center">
            {
                tecnologies.map((icon, idx)=>(<Icon className="work-info-icon" key={idx} icon={icon}/>))
            }
        </div>
    );
} 

export default WorkTecnologiesPreview;