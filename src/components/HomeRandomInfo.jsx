import { Icon } from "@iconify/react";
import { random } from "../data/random.json";
import { useState } from "react";
import AnimatedText from "./AnimatedText.jsx";

const HomeRandomInfo = () =>
{
    const [index, setIndex] = useState(0);
    const [dope, setDope] = useState(random[0]);

    const handleNextDope = () =>
    {
        const newIndex = (index+1) % random.length;
        setIndex(newIndex);
        
        const newDope = random[newIndex];
        setDope(newDope);
    }

    return (
        <div className="home-info-random center">
            <Icon className="home-info-random-icon" icon={dope.icon} />
            <AnimatedText className={"home-info-random-text"} text={dope.text} repeatDelay={7500} handle={handleNextDope}/>
        </div>
    );
}

export default HomeRandomInfo;