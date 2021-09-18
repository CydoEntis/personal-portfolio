import React from "react";

import styles from "./NavBar.module.scss";
import NavMenu from "./NavMenu";

const Navigation = () => {
	return (
		<div className={styles.nav}>
			<NavMenu />
		</div>
	);
};

export default Navigation;
