import { Icon } from "@iconify/react";

const HomeRandomInfo = () =>
{
    return (
        <div className="home-info-random center">
            <Icon className="home-info-random-icon" icon="material-symbols:videogame-asset-sharp" />
            <p className="home-info-random-text">a lot of games played</p>
        </div>
    );
}

export default HomeRandomInfo;