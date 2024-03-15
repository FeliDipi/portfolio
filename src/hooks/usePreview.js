import { useEffect } from "react";
import { useAnimation } from "framer-motion";

import { useGallery } from "./useGallery.js";

export const usePreview = () =>
{
    const { currentItem } = useGallery();
    const controls = useAnimation();

    const work = currentItem;

    useEffect(()=>
    {
        const animation = async () =>
        {
            await controls.start("hidden");
            controls.start("visible");
        }

        animation();
    },[work]);

    return {
        work,
        controls
    }
}