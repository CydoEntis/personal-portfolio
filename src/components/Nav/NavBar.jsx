import React from "react";

import styles from "./NavBar.module.scss";
import NavMenu from "./NavMenu";

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<NavMenu />
		</nav>
	);
};

export default Navigation;
