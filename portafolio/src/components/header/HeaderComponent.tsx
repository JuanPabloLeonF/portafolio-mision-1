import { NavLink } from "react-router-dom"
import "./HeaderComponent.css"
import { useState } from "react";

export const HeaderComponent = () => {

    const [activateButton, setActivateButton] = useState(false);

    return (
        <header className="header">
            <div className="container-img-logo">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="logo" />
            </div>
            <nav className={ `container-nav ${activateButton ? "container-nav" : "container-nav-hidden"}` }>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "activate" : "link-menu")}
                >
                    INICIO
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "activate" : "link-menu")}
                >
                    SOBRE MI
                </NavLink>
                <NavLink
                    to="/skill"
                    className={({ isActive }) => (isActive ? "activate" : "link-menu")}
                >
                    HABILIDADES
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) => (isActive ? "activate" : "link-menu")}
                >
                    PERFIL
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "activate" : "link-menu")}
                >
                    CONTACTO
                </NavLink>
            </nav>
            <div
                onClick={() => {setActivateButton(!activateButton)}}
                className="container-img-menu"
             >
                {
                    activateButton ? 
                    <img src={`${import.meta.env.BASE_URL}menu-burguer.svg`} alt="menu" /> : 
                    <img src={`${import.meta.env.BASE_URL}close.svg`} alt="close" />
                }
            </div>
        </header>
    )
}