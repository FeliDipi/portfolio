import SocialButton from "./SocialButton.jsx";
import MobileMenu from "./MobileMenu.jsx";
import { useEffect, useState } from "react";

const Navbar = () =>
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
        <nav className="navbar center">
            <div className="navbar-border"></div>
            <div className="navbar-social center">
                <SocialButton icon={"ri:linkedin-fill"} link={"https://www.linkedin.com/in/nicol%C3%A1s-felipe-dipierro-386710199/"}/>
                <SocialButton icon={"mingcute:github-fill"} link={"https://github.com/FeliDipi"}/>
            </div>
            <MobileMenu currentSection={currentSection}/>
        </nav>
    )
}

export default Navbar;