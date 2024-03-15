import { useState } from "react";
import { useAnimation } from "framer-motion";

import { random } from "../data/random.json";

export const useRandomInfo = () =>
{
    const [index, setIndex] = useState(0);
    const controls = useAnimation();

    const dope = random[index];

    const handlePre = () =>
    {
        controls.start("hidden");
    }

    const handleNextDope = () =>
    {
        setIndex((prev)=>((prev+1)%random.length));
        controls.start("visible");
    }

    return {
        dope,
        controls,
        handlePre,
        handleNextDope
    }
}