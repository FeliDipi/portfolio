import { Icon } from "@iconify/react";

const FormSubmit = () =>
{
    return (
        <div className="cv center">
            <div className="cv-back"></div>
            <button type="submit" className="cv-button center" download={"Nicolás Felipe Dipierro - CV"}>
                <p className="cv-text">Send</p>
                <Icon className="cv-icon" icon="material-symbols:send"/>
            </button>
        </div>
    );
}

export default FormSubmit;