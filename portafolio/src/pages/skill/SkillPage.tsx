import { useState } from "react";
import "./SkillPage.css";
import { skillsData } from "../../apis/ApiSkill";

export const SkillPage = () => {
    const [hoveredSkill, setHoveredSkill] = useState("");
    const [activateButton, setActivateButton] = useState(true);

    const skills = skillsData;

    return (
        <section className="skill">
            <article className="container-divition-skill">
                <h4>HABILIDADES</h4>
                <div className="linear-skill"></div>
            </article>

            <article className="container-info-skill">
                <h2>¿Cuáles son mis habilidades de programación?</h2>
                <div className="container-list-skill">
                    <ul>
                        {skills.map((skill) => (
                            <li key={skill.name}>
                                <strong
                                    style={hoveredSkill === skill.name ? { color: skill.color, borderColor: skill.color } : {}}
                                >
                                    {skill.name}
                                </strong>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="container-chekbox-skill">
                   <button 
                    onClick={() => setActivateButton(!activateButton)} 
                    type="button" 
                    className={`btn-skill ${activateButton ? "btn-active" : ""}`}
                   >TECNOLOGIAS</button>
                   <button 
                   onClick={() => setActivateButton(!activateButton)} 
                   type="button" 
                   className={`btn-skill ${!activateButton ? "btn-active" : ""}`}
                   >TOOLS</button>
                </div>
            </article>

            <article className="container-images-skill">
                {activateButton ? (
                    skills.
                    filter((skill) => skill.type === "technology")
                    .map((skill) => (
                        <div
                            key={skill.name}
                            className="container-img-skill-info"
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill("")}
                        >
                            <img src={skill.img} alt={skill.name} className="img-skill" />
                        </div>
                    ))
                ):(
                    skills.
                    filter((skill) => skill.type === "tool")
                    .map((skill) => (
                        <div
                            key={skill.name}
                            className="container-img-skill-info"
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill("")}
                        >
                            <img src={skill.img} alt={skill.name} className="img-skill" />
                        </div>
                    ))
                )}
            </article>
        </section>
    );
};
