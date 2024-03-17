import { works } from "../data/works.json";
import { createContext, useState } from "react";

export const WorkContext = createContext();

export const WorkProvider = ({children}) =>
{
    const [workExpanded, setWorkExpanded] = useState(false);
    const [workSelected, setWorkSelected] = useState(works[0]);

    const handleSelect = (workIndex) =>
    {
        setWorkSelected(works[workIndex]);
    }

    const handleClose = () =>
    {
        setWorkExpanded(false);
    }

    const handleOpen = () =>
    {
        setWorkExpanded(true);
    }

	return (
		<WorkContext.Provider value={{
            works,
            workSelected,
            workExpanded,
            handleSelect,
            handleClose,
            handleOpen
		}}>
			{children}
		</WorkContext.Provider>
	);
};
