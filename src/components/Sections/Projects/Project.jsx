import React from "react";

import styles from "./Project.module.scss";
import ProjectList from "./ProjectList";

const Project = () => {
	return (
		<section id="projects" className={styles["project-section"]}>
			<h2>
				<span>P</span>rojects
			</h2>
			<ProjectList />
		</section>
	);
};

export default Project;
