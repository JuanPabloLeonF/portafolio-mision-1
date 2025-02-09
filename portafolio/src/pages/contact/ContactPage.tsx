import { useState } from "react";
import "./ContactPage.css";

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        alert("Gracias por ponerte en contacto conmigo, " + formData.name + " te respondere a la brevedad.");
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    };

    return (
        <>
          <section className="contact">
            <article className="container-info-contact">
                <div className="container-divition-contact">
                    <h4>CONTACTO</h4>
                    <div className="linear-contact"></div>
                </div>
                <div className="container-info-data">
                    <h2>¿Necesitas un proyecto? enviame mensaje</h2>
                    <p>
                        ¡Me encantaría saber de ti! Ya sea que tengas una idea de proyecto, 
                        necesites ayuda con el desarrollo backend o simplemente quieras charlar sobre tecnología, 
                        no dudes en ponerte en contacto.
                    </p>
                    <p><strong className="strong-dev">Contactame:</strong> 3228843600</p>
                    <p><strong className="strong-dev">Email:</strong> fonseca123leon@gmail.com</p>
                    <div className="container-list-img-contact">
                        <a href="http://whatsapp.com" target="_blank" rel="noopener noreferrer">
                            <div className="img-container-contact">
                                <img src="/whatsapp.svg" alt="whatsapp" />
                            </div>
                        </a>
                        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <div className="img-container-contact">
                                <img src="/linkedin.svg" alt="linkedin" />
                            </div>
                        </a>
                        <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                            <div className="img-container-contact">
                                <img src="/github-svg.svg" alt="github" />
                            </div>
                        </a>
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                            <div className="img-container-contact">
                                <img src="/facebook.svg" alt="facebook" />
                            </div>
                        </a>
                    </div>
                </div>
            </article>
            <article className="form-contact">
                <form onSubmit={handleSubmit}>
                    <div className="container-inputs">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre:"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email:"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Escribe tu mensaje"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button className="btn-submit" type="submit">ENVIAR</button>
                </form>
            </article>
          </section>
        </>
    );
};