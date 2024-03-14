import MenuButtonSection from "./MenuButtonSection.jsx";

const DesktopMenu = () =>
{
    return (
        <div className="navbar-desktop center">
            <MenuButtonSection icon="ri:user-fill" section="home"/>
            <MenuButtonSection icon="ic:sharp-work" section="works"/>
            <MenuButtonSection icon="ion:mail" section="contact"/>
        </div>
    );
}

export default DesktopMenu;