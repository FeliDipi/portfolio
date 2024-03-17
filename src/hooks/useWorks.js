import { useContext } from "react";
import { WorkContext } from "../providers/WorkContext.jsx";

export const useWorks = () =>
{
	const context = useContext(WorkContext);

	if(context === undefined)
	{
		throw new Error("useWorks must be used within a Work Provider");
	}

	return context;
};