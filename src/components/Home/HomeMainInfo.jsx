import { Icon } from "@iconify/react";

const HomeMainInfo = () =>
{
    return (
        <div className="home-info-text center">
            <h4 className="home-info-position">Game Developer / Full Stack Developer</h4>
            <h4 className="home-info-studies">Advanced Software Engineering Student</h4>
            <div className="home-info-university center">
                <Icon className="home-info-university-icon" icon="mdi:university"/>
                <a className="home-info-university-text" href="https://www.unicen.edu.ar/" target="_blank" rel="noopener noreferrer">UNICEN</a>
            </div>
        </div>
    );
}

export default HomeMainInfo;