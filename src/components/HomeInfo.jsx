import perfil from "../assets/images/perfil.jpg";
import CVButton from "./CVButton.jsx";
import HomeRandomInfo from "./HomeRandomInfo.jsx";

const HomeInfo = () =>
{
    return (
        <div className="home-content center">
            <img className="home-perfil" src={perfil} alt="Nicolás Felipe Dipierro" />
            <div className="bg center">
                <div className="bg-border-back"></div>
                <div className="bg-border-top"></div>
                <div className="bg-border-bottom"></div>
                <div className="bg-content center">
                    <div className="home-info-text center">
                        <h4 className="home-info-position">Full Stack Developer / Game Developer</h4>
                        <h4 className="home-info-studies">Student of Ing. Software advanced</h4>
                    </div>
                    <HomeRandomInfo/>
                    <CVButton/>
                </div>
            </div>
        </div>
    );
}

export default HomeInfo;