import { useState } from "react";
import "./ProfilePage.css"

export const ProfilePage = () => {

    const [activateButton, setActivateButton] = useState(true);


    return (
        <section className="profile">
            <div className="container-button-profile">
                <button
                 onClick={() => setActivateButton(!activateButton)}
                 className={` button ${activateButton ? "activate-btn-profile" : ""}`} 
                 type="button"
                 >ESTUDIOS</button>
                <button
                 onClick={() => setActivateButton(!activateButton)}
                 className={` button ${!activateButton ? "activate-btn-profile" : ""}`} 
                 type="button"
                 >EXPERIENCIAS</button>
            </div>
            <article className="container-info-profile">
                <div className="container-img-profile">
                    <img src={activateButton ? `${import.meta.env.BASE_URL}graduation.svg` : `${import.meta.env.BASE_URL}experience.svg`} alt="profile" />
                </div>
                {
                    activateButton ? (
                        <div className="container-info-profile-1">
                            <div className="container-info-profile-1-item">
                                <div className="container-information">
                                    <div className="container-date">
                                        <div className="container-img-date">
                                            <img src={`${import.meta.env.BASE_URL}calendar.svg`} alt="calendar" />
                                        </div>
                                        <h3>2022 - 2024</h3>
                                    </div>
                                    <div className="information">
                                        <h2>ANALISIS Y DESARROLLO DE SOFTWARE - SENA</h2>
                                        <p>
                                            Soy egresado del servicio nacional de aprendizaje - <strong className="strong-dev">SENA</strong> del tecnologo <strong className="strong-dev">analisis y desarrrollo de software </strong> 
                                            con conocimientos en diversos temas como base de datos <strong className="strong-dev">relacionales</strong> y <strong className="strong-dev">no relacionales</strong>, 
                                            analisis de requerimientos y programacion en <strong className="strong-dev">backend</strong> y <strong className="strong-dev">frontend</strong>.
                                        </p>
                                    </div>
                                    <div className="container-linear-profile">
                                        <div className="container-radius-profile"></div>
                                        <div className="linear-profile"></div>  
                                    </div>
                                </div>
                            </div>
                            <div className="container-info-profile-1-item">
                                <div className="container-information">
                                    <div className="container-date">
                                        <div className="container-img-date">
                                            <img src={`${import.meta.env.BASE_URL}calendar.svg`} alt="calendar" />
                                        </div>
                                        <h3>2022 - 2025</h3>
                                    </div>
                                    <div className="container-linear-profile">
                                        <div className="container-radius-profile"></div>
                                        <div className="linear-profile"></div>  
                                    </div>
                                    <div className="information">
                                        <h2>CURSOS CORTOS</h2>
                                        <p>
                                            A lo largo de mi formacion como aprendiz <strong className="strong-dev">SENA </strong>
                                            he tomado cursos cortos en diversos temas desde tecnologias como <strong className="strong-dev">React</strong>, <strong className="strong-dev">Angular</strong>, <strong className="strong-dev">Python</strong> entre otros, 
                                            pero tambien he realizado cursos sobre <strong className="strong-dev">Patrones de diseño</strong> y <strong className="strong-dev">Arquitectura de Software</strong>. 

                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    ): (
                        <div className="container-info-profile-1">
                            contenedor de experiencias
                        </div>
                    )
                }
            </article>
        </section>
    )
}