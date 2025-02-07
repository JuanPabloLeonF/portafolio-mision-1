import "./HomePage.css";

export const HomePage = () => {
    return (
        <section className="home">
            <article className="container-info">
                <h3>Hola</h3>
                <h1>SOY JUAN PABLO LEON</h1>
                <h2> <strong className="strong-dev">Desarrollador</strong> Backend</h2>
                <button className="btn-contact" type="button">Contactame</button>
            </article>
            <article className="container-contact-network">
                <a href="https://www.linkedin.com/" target="_blank">
                    <div className="container-img-network">
                            <img src="/linkedin-black.png" alt="linkedin" />
                    </div>
                </a>
                <a href="https://www.whatsapp.com/" target="_blank">
                    <div className="container-img-network">
                            <img src="/whatsapp.png" alt="whatsapp" />
                    </div>
                </a>
                <a href="https://www.github.com/" target="_blank">
                    <div className="container-img-network">
                            <img src="/github-border.png" alt="github" />
                    </div>
                </a>
                <div className="linear"></div>
            </article>
        </section>
    );
};