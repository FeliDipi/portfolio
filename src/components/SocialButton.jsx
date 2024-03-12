import { Icon } from "@iconify/react";

const SocialButton = ({icon,link}) =>
{
    return (
        <div className="social-button center">
            <div className="social-button-bg"></div>
            <a className="social-button-link center" target="_blank" href={link}>
                <Icon className="social-button-icon" icon={icon}/>
            </a>
        </div>
    )
}

export default SocialButton;