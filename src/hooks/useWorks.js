import { useState } from "react";

export const useWorks = () =>
{
    const [workSelected, setWorkSelected] = useState(null);

    const handleSelect = (work) =>
    {
        setWorkSelected(work);
    }

    const handleClose = () =>
    {
        setWorkSelected(null);
    }

    return {
        workSelected,
        handleSelect,
        handleClose
    }
}