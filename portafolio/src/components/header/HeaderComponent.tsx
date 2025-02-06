import "./HeaderComponent.css"

export const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="container-img-logo">
                <img src="/logo.png" alt="logo" />
            </div>
            <nav className="container-nav">
                <a href="" className="link-menu">
                    INICIO
                </a>
                <a href="" className="link-menu">
                    SOBRE MI
                </a>
                <a href="" className="link-menu">
                    HABILIDADES
                </a>
                <a href="" className="link-menu">
                    PERFIL
                </a>
                <a href="" className="link-menu">
                    PROYECTOS
                </a>
            </nav>
        </header>
    )
}