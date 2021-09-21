import React from "react";

import styles from "./Link.module.scss";

const Link = ({ link, className }) => {
	return (
		<a href={link} rel="noreferrer" target="_blank" className={styles["project-link"]}>
			<i className={`${className} bx`} />
		</a>
	);
};

export default Link;
