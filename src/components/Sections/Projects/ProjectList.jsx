import React from "react";
import ProjectCard from "./ProjectCard";

import styles from "./ProjectList.module.scss";

import tapgames from "../../../assets/images/tapgames.png";
import amiibo from "../../../assets/images/amiibo.png";

const projectData = [
	{
		id: 1,
		img: tapgames,
		title: "TapGames",
		codeLink: "https://github.com/CydoEntis/tapgames",
		liveLink: "https://tapgames.vercel.app/",
	},
	{
		id: 2,
		img: amiibo,
		title: "MyAmiibos",
		codeLink: "https://github.com/CydoEntis/my-amiibos",
		liveLink: "https://my-amiibos.vercel.app/",
	},
];

const projects = projectData.map((project) => (
	<ProjectCard
		key={project.id}
		img={project.img}
		title={project.title}
		codeLink={project.codeLink}
		liveLink={project.liveLink}
	/>
));

const ProjectList = () => {
	return <div className={styles["project-list"]}>{projects}</div>;
};

export default ProjectList;
