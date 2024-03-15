import { Icon } from "@iconify/react";

const ContactInfoGroup = ({children,icon}) =>
{
    return (
        <div className="contact-info-group center">
            <Icon icon={icon} className="contact-info-icon"/>
            <p className="contact-info-text">{children}</p>
        </div>
    );
}

export default ContactInfoGroup;