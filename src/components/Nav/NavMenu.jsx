import React from "react";
import NavItem from "./NavItem";

import styles from "./NavMenu.module.scss";

const NavMenu = () => {
	const aboutIcon = "bx bxs-user";
	const resumeIcon = "bx bxs-file";
	const workIcon = "bx bxs-folder";
	const contactIcon = "bx bxs-message-dots";

	return (
		<ul className={styles["nav-menu"]}>
			<NavItem text={"About"} icon={aboutIcon} />
			<NavItem text={"Resume"} icon={resumeIcon} />
			<NavItem text={"Work"} icon={workIcon} />
			<NavItem text={"Contact"} icon={contactIcon} />
		</ul>
	);
};

export default NavMenu;
