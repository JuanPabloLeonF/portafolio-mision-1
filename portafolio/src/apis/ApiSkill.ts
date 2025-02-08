interface ISkill {
    name: string;
    img: string;
    color: string;
    type: string;
}

export const skillsData: ISkill[] = [
    { name: "Python", img: "/python.svg", color: "#a9ab37", type: "technology" },
    { name: "Django", img: "/django.svg", color: "#187450", type: "technology" },
    { name: "Flask", img: "/flask.svg", color: "#bcebd9", type: "technology" },
    { name: "HTML", img: "/html.svg", color: "#E34F26", type: "technology" },
    { name: "CSS", img: "/css.svg", color: "#1572B6", type: "technology" },
    { name: "JavaScript", img: "/javascript.svg", color: "#F7DF1E", type: "technology" },
    { name: "Angular", img: "/angular.svg", color: "#DD0031", type: "technology" },
    { name: "React", img: "/react.svg", color: "#61DAFB", type: "technology" },
    { name: "PostgreSQL", img: "/postgresql.svg", color: "#336791", type: "technology" },
    { name: "MySQL", img: "/mysql.svg", color: "#4479A1", type: "technology" },
    { name: "MongoDB", img: "/mongo.svg", color: "#47A248", type: "technology" },
    { name: "Docker", img: "/docker.svg", color: "#2496ED", type: "technology" },
    { name: "Kubernetes", img: "/kubernetes.svg", color: "#326CE5", type: "technology" },
    { name: "Java", img: "/java.svg", color: "#9e231f", type: "technology" },
    { name: "SpringBoot", img: "/springboot.svg", color: "#6DB33F", type: "technology" },
    { name: "Sass", img: "/sass.svg", color: "#CC6699", type: "tool" },
    { name: "Linux", img: "/linux.svg", color: "#FCC624", type: "tool" },
    { name: "Git", img: "/git.svg", color: "#F05032", type: "tool" },
    { name: "GitHub", img: "/github.svg", color: "#3e2d8d", type: "tool" },
];