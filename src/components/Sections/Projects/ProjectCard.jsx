import React from "react";
import Link from "../../UI/Links/Link";

import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ img, title, codeLink, liveLink }) => {
	return (
		<div className={styles.project}>
			<div className={styles["img-wrapper"]}>
				<img src={img} alt="" />
			</div>
			<h3>{title}</h3>
			<div className={styles["project-links"]}>
				<Link className={"bx-code-alt"} link={codeLink} />
				<Link className={"bx-globe"} link={liveLink} />
			</div>
		</div>
	);
};

export default ProjectCard;
