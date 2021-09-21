import React from "react";
import ProjectCard from "./ProjectCard";

import styles from "./ProjectList.module.scss";

const projectData = [
	{
		id: 1,
		img: "https://github.com/CydoEntis/tapgames/raw/main/src/assets/tap-games.png",
		title: "TapGames",
		codeLink: "https://github.com/CydoEntis/tapgames",
		liveLink: "https://tapgames.vercel.app/",
	},
	{
		id: 2,
		img: "https://github.com/CydoEntis/my-amiibos/raw/main/read-me-images/homepage.png",
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
