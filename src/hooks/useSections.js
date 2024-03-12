import { useContext } from "react";
import { SectionsContext } from "../providers/SectionsContext.jsx";

export const useSections = () =>
{
	const context = useContext(SectionsContext);

	if(context === undefined)
	{
		throw new Error("useSections must be used within a Sections Provider");
	}

	return context;
};