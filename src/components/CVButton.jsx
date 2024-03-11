import { Icon } from "@iconify/react";
import cv from "../assets/documents/cv.pdf";

const CVButton = () =>
{
    return (
        <div className="cv center">
            <div className="cv-back"></div>
            <a href={cv} className="cv-button center" download={"Nicolás Felipe Dipierro - CV"}>
                <p className="cv-text">My CV</p>
                <div className="center">
                    <Icon className="cv-icon" icon="pepicons-pop:cv"/>
                    <Icon className="cv-icon" icon="material-symbols:download-sharp"/>
                </div>
            </a>
        </div>
    );
}

export default CVButton;