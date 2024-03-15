import ContactInfoGroup from "./ContactInfoGroup";

const ContactInfo = () =>
{
    return (
        <div className="contact-info center">
            <ContactInfoGroup icon={"ic:baseline-email"}>nicolasdipierrocontacto@gmail.com</ContactInfoGroup>
            <ContactInfoGroup icon={"solar:phone-bold-duotone"}>+54 2266520341</ContactInfoGroup>
        </div>
    );
}

export default ContactInfo;