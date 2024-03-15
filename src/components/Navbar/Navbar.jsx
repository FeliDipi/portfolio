import NavbarSocial from "./NavbarSocial.jsx";
import NavbarMobile from "./NavbarMobile.jsx";
import NavbarDesktop from "./NavbarDesktop.jsx";

const Navbar = () =>
{
    return (
        <nav className="navbar center">
            <div className="navbar-border"></div>
            <div className="navbar-social center">
                <NavbarSocial icon={"ri:linkedin-fill"} link={"https://www.linkedin.com/in/nicol%C3%A1s-felipe-dipierro-386710199/"}/>
                <NavbarSocial icon={"mingcute:github-fill"} link={"https://github.com/FeliDipi"}/>
            </div>
            <NavbarMobile/>
            <NavbarDesktop/>
        </nav>
    )
}

export default Navbar;