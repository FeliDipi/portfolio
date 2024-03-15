import { Icon } from "@iconify/react";

const WorkLink = ({link}) =>
{
    return (
        <div className="work-extended-link-content center">
            <Icon className="work-extended-link-icon" icon="ph:link-bold" />
            <a className="work-extended-link" href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </div>
    );
}

export default WorkLink;