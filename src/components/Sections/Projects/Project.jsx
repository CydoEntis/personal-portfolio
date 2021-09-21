import React from "react";
import SectionTitle from "../../UI/Titles/SectionTitle";

import styles from "./Project.module.scss";
import ProjectList from "./ProjectList";

const Project = () => {
	return (
		<section id="projects" className={styles["project-section"]}>
			<SectionTitle title={"Projects"} />
			<ProjectList />
		</section>
	);
};

export default Project;
