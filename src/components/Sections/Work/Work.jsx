import React from "react";
import WorkCard from "./WorkCard";

import styles from "./Work.module.scss";

const Work = () => {
	return (
		<section className={styles["project-section"]}>
			<WorkCard />
		</section>
	);
};

export default Work;
