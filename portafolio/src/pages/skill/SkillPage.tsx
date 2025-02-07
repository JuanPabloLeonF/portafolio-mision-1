import "./SkillPage.css"

export const SkillPage = () => {
    return (
        <section className="skill">
            <article className="container-divition-skill">
                <h4>HABILIDADES</h4>
                <div className="linear-skill"></div>
            </article>
            <article className="container-info-skill">
                <h2>¿Cuales son mis habilidades de programacion?</h2>
                <div className="container-list-skill">
                    <ul>
                        <li><strong>Python</strong></li>
                        <li><strong>Django</strong></li>
                        <li><strong>Flask</strong></li>
                        <li><strong>HTML</strong></li>
                        <li><strong>CSS</strong></li>
                        <li><strong>JavaScript</strong></li>
                        <li><strong>Angular</strong></li>
                        <li><strong>React</strong></li>
                        <li><strong>PostgreSQL</strong></li>
                        <li><strong>MySQL</strong></li>
                        <li><strong>MongoDB</strong></li>
                        <li><strong>Docker</strong></li>
                        <li><strong>Kubernetes</strong></li>
                        <li><strong>Java</strong></li>
                        <li><strong>SpringBoot</strong></li>
                        <li><strong>Sass</strong></li>
                        <li><strong>Linux</strong></li>
                        <li><strong>Git</strong></li>
                        <li><strong>GitHub</strong></li>
                    </ul>
                </div>
                <div className="container-chekbox-skill">
                   <button type="button" className="btn-skill">TECNOLOGIAS</button>
                   <button type="button" className="btn-skill">TOOLS</button>
                </div>
            </article>
            <article className="container-images-skill">
                <div className="container-img-skill-info">
                    <img src="/python.png" alt="Python" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/django.png" alt="Django" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/flask.png" alt="Flask" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/html.png" alt="HTML" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/css.png" alt="CSS" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/javascript.png" alt="JavaScript" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/angular.png" alt="Angular" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/react.png" alt="React" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/postgresql.png" alt="PostgreSQL" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/mysql.png" alt="MySQL" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/mongodb.png" alt="MongoDB" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/docker.png" alt="Docker" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/kubernetes.png" alt="Kubernetes" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/java.png" alt="Java" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/springboot.png" alt="Springboot" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/sass.png" alt="Sass" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/linux.png" alt="Linux" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/git.png" alt="Git" className="img-skill" />
                </div>
                <div className="container-img-skill-info">
                    <img src="/github.png" alt="GitHub" className="img-skill" />
                </div>
            </article>
        </section>
    )
}