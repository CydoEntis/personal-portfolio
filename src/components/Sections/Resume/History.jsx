import React from "react";

import styles from "./History.module.scss";

const History = ({ startDate, endDate, title, company, description }) => {
	return (
		<div className={styles.history}>
			<span className={styles["history-date"]}>
				{startDate} - {endDate}
			</span>
			<h2 className={styles["history-title"]}>{title}</h2>
			<h3 className={styles["history-company"]}>{company}</h3>
			<p className={styles["history-description"]}>{description}</p>
		</div>
	);
};

export default History;
