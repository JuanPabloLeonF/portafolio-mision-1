import "./AboutPage.css"

export const AboutPage = () => {
    return (
        <section className="about">
            <article className="container-img-about">
                <img src={`${import.meta.env.BASE_URL}img-about.svg`} alt="programacion" />
            </article>
            <article className="container-divition-about">
                <h4>SOBRE MI</h4>
                <div className="linear-about"></div>
            </article>
            <article className="container-info-about">
                <h2>
                    ¿Necesitas un producto creativo?
                </h2>
                <h2>
                    ¡Puedo ayudarte!
                </h2>
                <p>
                    ¡Hola! <strong className="strong-dev">Soy Juan Pablo Leon Fonseca</strong>, un apasionado desarrollador con talento para crear soluciones eficientes, seguras y sin interrupciones. 
                    Mi experiencia se centra en <strong className="strong-dev">Python</strong> y <strong className="strong-dev">Django</strong>, donde me especializo en construir sistemas <strong className="strong-dev">backend</strong> sólidos y <strong className="strong-dev">APIs RESTful</strong> que impulsan experiencias de usuario excepcionales.
                </p>
                <p>También tengo habilidades en:</p>
                <ul>
                    <li> <strong className="strong-dev">Flask</strong> para contruir <strong className="strong-dev">microservicios</strong> de manera rapida y segura</li>
                    <li>Diseño y gestión de bases de datos con <strong className="strong-dev">MySQL</strong>, <strong className="strong-dev">PostgreSQL</strong> y <strong className="strong-dev">MongoDB</strong></li>
                    <li>Desarrollo Frontend como <strong className="strong-dev">HTML</strong>, <strong className="strong-dev">CSS</strong>, <strong className="strong-dev">JavaScript</strong>, <strong className="strong-dev">Angular</strong> y <strong className="strong-dev">React</strong></li>
                    <li>Arquitecura de Software con  <strong className="strong-dev">Patrones</strong> y codigo limpio</li>
                </ul>
            </article>
        </section>
    )
}