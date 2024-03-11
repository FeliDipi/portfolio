import { Icon } from "@iconify/react";

const MenuButton = () =>
{
    return (
        <div className="navbar-menu-button-content center">
            <button className="navbar-menu-button"></button>
            <Icon className="navbar-menu-button-icon" icon="jam:menu" />
        </div>
    )
}

export default MenuButton;