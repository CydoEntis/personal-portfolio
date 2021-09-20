import React from "react";

import styles from "./WorkCard.module.scss";

const WorkCard = () => {
	return (
		<div className={styles.projects}>
			<div className={styles["img-wrapper"]}>
				<img src="http://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg" alt="" />
			</div>
			<h3>Sample Title</h3>
			<div className={styles["project-links"]}>
				<p>G</p>
				<p>P</p>
			</div>
		</div>
	);
};

export default WorkCard;
