interface ISkill {
    name: string;
    img: string;
    color: string;
    type: string;
}

export const skillsData: ISkill[] = [
    { name: "Python", img: `${import.meta.env.BASE_URL}python.svg`, color: "#a9ab37", type: "technology" },
    { name: "Django", img: `${import.meta.env.BASE_URL}django.svg`, color: "#187450", type: "technology" },
    { name: "Flask", img: `${import.meta.env.BASE_URL}flask.svg`, color: "#bcebd9", type: "technology" },
    { name: "HTML", img: `${import.meta.env.BASE_URL}html.svg`, color: "#E34F26", type: "technology" },
    { name: "CSS", img: `${import.meta.env.BASE_URL}css.svg`, color: "#1572B6", type: "technology" },
    { name: "JavaScript", img: `${import.meta.env.BASE_URL}javascript.svg`, color: "#F7DF1E", type: "technology" },
    { name: "Angular", img: `${import.meta.env.BASE_URL}angular.svg`, color: "#DD0031", type: "technology" },
    { name: "React", img: `${import.meta.env.BASE_URL}react.svg`, color: "#61DAFB", type: "technology" },
    { name: "PostgreSQL", img: `${import.meta.env.BASE_URL}postgresql.svg`, color: "#336791", type: "technology" },
    { name: "MySQL", img: `${import.meta.env.BASE_URL}mysql.svg`, color: "#4479A1", type: "technology" },
    { name: "MongoDB", img: `${import.meta.env.BASE_URL}mongo.svg`, color: "#47A248", type: "technology" },
    { name: "Docker", img: `${import.meta.env.BASE_URL}docker.svg`, color: "#2496ED", type: "technology" },
    { name: "Kubernetes", img: `${import.meta.env.BASE_URL}kubernetes.svg`, color: "#326CE5", type: "technology" },
    { name: "Java", img: `${import.meta.env.BASE_URL}java.svg`, color: "#9e231f", type: "technology" },
    { name: "SpringBoot", img: `${import.meta.env.BASE_URL}springboot.svg`, color: "#6DB33F", type: "technology" },
    { name: "Sass", img: `${import.meta.env.BASE_URL}sass.svg`, color: "#CC6699", type: "tool" },
    { name: "Linux", img: `${import.meta.env.BASE_URL}linux.svg`, color: "#FCC624", type: "tool" },
    { name: "Git", img: `${import.meta.env.BASE_URL}git.svg`, color: "#F05032", type: "tool" },
    { name: "GitHub", img: `${import.meta.env.BASE_URL}github.svg`, color: "#3e2d8d", type: "tool" },
];
