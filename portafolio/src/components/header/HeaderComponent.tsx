import { NavLink } from "react-router-dom"
import "./HeaderComponent.css"

export const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="container-img-logo">
                <img src="/logo.png" alt="logo" />
            </div>
            <nav className="container-nav">
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
        </header>
    )
}