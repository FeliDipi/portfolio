import images from "../../hooks/useImage.js";

import Background from "../Background.jsx";

import HomeMainInfo from "./HomeMainInfo.jsx";
import HomeRandomInfo from "./HomeRandomInfo.jsx";
import HomeButtonCV from "./HomeButtonCV.jsx";

const HomeInfo = () =>
{
    const perfilKey = `/src/assets/images/perfil.jpg`;

    return (
        <div className="home-content center">
            <img className="home-perfil" src={images[perfilKey]} alt="Nicolás Felipe Dipierro" />
            <Background className={"home-info-content"}>
                <HomeMainInfo/>
                <HomeRandomInfo/>
                <HomeButtonCV/>
            </Background>
        </div>
    );
}

export default HomeInfo;