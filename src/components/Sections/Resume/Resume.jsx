import React from "react";
import SectionTitle from "../../UI/Titles/SectionTitle";

import styles from "./Resume.module.scss";
import HistoryList from "./HistoryList";

const Resume = () => {
	return (
		<section id="resume" className={styles.resume}>
			<SectionTitle title={"resume"} />
			<HistoryList />
		</section>
	);
};

export default Resume;
