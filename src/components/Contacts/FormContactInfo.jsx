import { Icon } from "@iconify/react";

const FormContactInfo = () =>
{
    return (
        <div className="form-contact center">
            <div className="form-contact-group center">
                <Icon icon="ic:baseline-email" className="form-contact-icon"/>
                <p className="form-contact-mail">nicolasdipierrocontacto@gmail.com</p>
            </div>
            <div className="form-contact-group center">
                <Icon icon="mingcute:phone-fill" className="form-contact-icon"/>
                <p className="form-contact-mail">+54 2266520341</p>
            </div>
        </div>
    );
}

export default FormContactInfo;