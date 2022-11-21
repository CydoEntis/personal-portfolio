import React from "react";
import ProjectCard from "./ProjectCard";

import styles from "./ProjectList.module.scss";

import tapgames from "../../../assets/images/tapgames.png";
import amiibo from "../../../assets/images/amiibo.png";
import expensify from "../../../assets/images/expensify.png";

const projectData = [
    {
        id: 1,
        img: amiibo,
        title: "MyAmiibos",
        frontendink: "https://github.com/CydoEntis/my-amiibos",
        backendLink: "https://github.com/CydoEntis/amiibo-party-backend",
        liveLink: "https://amiibo-party-frontend.vercel.app/",
    },
    {
        id: 2,
        img: tapgames,
        title: "TapGames",
        frontendLink: "https://github.com/CydoEntis/tapgames",
        liveLink: "https://tapgames.vercel.app/",
    },
    {
        id: 3,
        img: expensify,
        title: "Expensify",
        frontendLink: "https://github.com/CydoEntis/expensify",
        liveLink: "https://expensify-delta.vercel.app/",
    },
];

const projects = projectData.map((project) => (
    <ProjectCard
        key={project.id}
        img={project.img}
        title={project.title}
        codeLink={project.codeLink}
        backendLink={project.backendLink}
        liveLink={project.liveLink}
    />
));

const ProjectList = () => {
    return <div className={styles["project-list"]}>{projects}</div>;
};

export default ProjectList;
