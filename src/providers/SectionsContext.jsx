import { createContext, useEffect, useState } from "react";

export const SectionsContext = createContext();

export const SectionsProvider = ({children}) =>
{
    const [currentSection, setCurrentSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const $sections = document.querySelectorAll('section');
            $sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.clientHeight;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setCurrentSection(section.id);
                }
            });
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
	return (
		<SectionsContext.Provider value={{
			currentSection
		}}>
			{children}
		</SectionsContext.Provider>
	);
};
