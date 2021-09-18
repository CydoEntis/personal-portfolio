import React from "react";

import styles from "./NavItem.module.scss";

const NavItem = ({ icon, text }) => {
	return (
		<li className={styles["nav-item"]}>
			<i className={`${icon} ${styles["nav-item--icon"]}`} />
			<p className={styles["nav-item--text"]}>{text}</p>
		</li>
	);
};

export default NavItem;
