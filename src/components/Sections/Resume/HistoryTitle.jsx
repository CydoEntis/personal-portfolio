import React from "react";

import styles from "./HistoryTitle.module.scss";

const HistoryTitle = ({ title, className }) => {
	return (
		<h2 className={styles.subtitle}>
			<i className={`bx ${className} ${styles.icon}`} /> {title}
		</h2>
	);
};

export default HistoryTitle;
