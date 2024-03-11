import MenuButton from "./MenuButton";
import SocialButton from "./SocialButton";

const Navbar = () =>
{
    return (
        <nav className="navbar center">
            <div className="navbar-border"></div>
            <div className="navbar-social center">
                <SocialButton icon={"ri:linkedin-fill"} link={"https://www.linkedin.com/in/nicol%C3%A1s-felipe-dipierro-386710199/"}/>
                <SocialButton icon={"mingcute:github-fill"} link={"https://github.com/FeliDipi"}/>
            </div>
            <MenuButton/>
        </nav>
    )
}

export default Navbar;