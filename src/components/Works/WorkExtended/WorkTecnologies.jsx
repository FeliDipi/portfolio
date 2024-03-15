import { Icon } from "@iconify/react";

const WorkTecnologies = ({tecnologies}) =>
{
    return (
        <div className="work-extended-tecnologies-content center">
            <p className="work-extended-tecnologies-text">Tecnologies: </p>
            {
                tecnologies.map((icon, idx)=>(<Icon className="work-extended-tecnologies-icon" key={idx} icon={icon}/>))
            }
        </div>
    );
}

export default WorkTecnologies;