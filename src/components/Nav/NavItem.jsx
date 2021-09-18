import React from "react";

import styles from "./NavItem.module.scss";

const NavItem = ({ className, icon, text, onClick }) => {
	return (
		<li className={`${className} ${styles["nav-item"]}`} onClick={onClick}>
			<i className={`${icon} ${styles["nav-item--icon"]}`} />
			<p className={styles["nav-item--text"]}>{text}</p>
		</li>
	);
};

export default NavItem;
