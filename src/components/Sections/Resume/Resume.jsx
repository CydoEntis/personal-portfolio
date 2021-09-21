import React from "react";
import SectionTitle from "../../UI/Titles/SectionTitle";

import styles from "./Resume.module.scss";

const Resume = () => {
	return (
		<section id="resume" className={styles.resume}>
			<SectionTitle title={"resume"} />
		</section>
	);
};

export default Resume;
