import AnimatedText from "./AnimatedText";

const HomePresentation = () =>
{
    return (
        <div className="home-presentation center">
            <AnimatedText className={"home-presentation-hi"} text={"Hi there!, i’m"}/>
            <AnimatedText className={"home-presentation-name"} text={"Nicolás Felipe"}/>
            <AnimatedText className={"home-presentation-lastname"} text={"Dipierro"}/>
        </div>
    );
}

export default HomePresentation;