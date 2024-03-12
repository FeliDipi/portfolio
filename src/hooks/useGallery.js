import { useContext } from "react";
import { GalleryContext } from "../providers/GalleryContext.jsx";

export const useGallery = () =>
{
	const context = useContext(GalleryContext);

	if(context === undefined)
	{
		throw new Error("useGallery must be used within a Gallery Provider");
	}

	return context;
};