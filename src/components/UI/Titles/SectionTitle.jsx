import React from "react";

import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ title }) => {
	const firstLetter = title.charAt(0);
	const remainingLetters = title.substring(1, title.length);

	return (
		<h2 className={styles["section-title"]}>
			<span>{firstLetter}</span>
			{remainingLetters}
		</h2>
	);
};

export default SectionTitle;
