import NavbarButtonSection from "./NavbarButtonSection.jsx";

const NavbarDesktop = () =>
{
    return (
        <div className="navbar-desktop center">
            <NavbarButtonSection icon="ri:user-fill" section="home"/>
            <NavbarButtonSection icon="ic:sharp-work" section="works"/>
            <NavbarButtonSection icon="ion:mail" section="contact"/>
        </div>
    );
}

export default NavbarDesktop;