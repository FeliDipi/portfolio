import { Icon } from "@iconify/react";

import CVButton from "./CVButton.jsx";
import HomeRandomInfo from "./HomeRandomInfo.jsx";

import images from "../../hooks/useImage.js";

const HomeInfo = () =>
{
    const perfilKey = `/src/assets/images/perfil.jpg`;

    return (
        <div className="home-content center">
            <img className="home-perfil" src={images[perfilKey]} alt="Nicolás Felipe Dipierro" />
            <div className="bg center">
                <div className="bg-border-back"></div>
                <div className="bg-border-top"></div>
                <div className="bg-border-bottom"></div>
                <div className="bg-content center">
                    <div className="home-info-text center">
                        <h4 className="home-info-position">Full Stack Developer / Game Developer</h4>
                        <h4 className="home-info-studies">Advanced Software Engineering Student</h4>
                        <div className="home-info-university center">
                            <Icon className="home-info-university-icon" icon="mdi:university"/>
                            <a className="home-info-university-text" href="https://www.unicen.edu.ar/" target="_blank" rel="noopener noreferrer">UNICEN</a>
                        </div>
                    </div>
                    <HomeRandomInfo/>
                    <CVButton/>
                </div>
            </div>
        </div>
    );
}

export default HomeInfo;