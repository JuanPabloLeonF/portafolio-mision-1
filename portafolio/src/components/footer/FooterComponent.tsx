import "./FooterComponent.css"

export const FooterComponent = () => {
    return (
        <footer className="footer">
            <section className="container-images">
                <div className="container-img">
                    <a href="https://www.linkedin.com/" target="_blank">
                        <img src={`${import.meta.env.BASE_URL}linkedin.png`} alt="linkedin" />
                    </a>
                </div>
                <div className="container-img">
                    <a href="https://www.github.com/" target="_blank">
                        <img src={`${import.meta.env.BASE_URL}github.png`} alt="github" />
                    </a>
                </div>
            </section>
            <p>© 2025 Portafolio. Todos los derechos reservados.</p>
        </footer>
    )
}