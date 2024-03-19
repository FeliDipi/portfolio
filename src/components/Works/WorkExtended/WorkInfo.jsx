import Background from "../../Background.jsx";
import WorkEnterprise from "./WorkEnterprise.jsx";
import WorkFreelance from "./WorkFreelance.jsx";
import WorkPosition from "./WorkPosition.jsx";
import WorkTecnologies from "./WorkTecnologies.jsx";
import WorkLink from "./WorkLink.jsx";
import WorkDate from "./WorkDate.jsx";
import WorkReference from "./WorkReference.jsx";

const WorkInfo = ({work}) =>
{
    return (
        <Background className={"work-extended-bg"} isBottom={false}>
            <h1 className="work-extended-name">{work.name}</h1>
            { 
                work.enterprise?
                    <WorkEnterprise enterprise={work.enterprise}/>:
                    <WorkFreelance/>
            }
            <WorkPosition job={work.job}/>
            <WorkTecnologies tecnologies={work.tecnologies}/>
            {
                work.reference && <WorkReference reference={work.reference}/>
            }
            { 
                work.link && <WorkLink link={work.link}/>
            }
            <p className="work-extended-resume">
                <span className="bold">Resume:</span><br/>
                {
                    work.resume
                }
            </p>
            <WorkDate time={work.time}/>
        </Background>
    );
}

export default WorkInfo;