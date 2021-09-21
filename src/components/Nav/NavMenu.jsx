import React, { useState } from "react";
import NavItem from "./NavItem";

import styles from "./NavMenu.module.scss";

const NavMenu = () => {
	const navItems = [
		{ id: 1, sectionId: "about", text: "About", icon: "bx bxs-user" },
		{ id: 2, sectionId: "resume", text: "Resume", icon: "bx bxs-file" },
		{ id: 3, sectionId: "projects", text: "Projects", icon: "bx bxs-folder" },
		{ id: 4, sectionId: "contact", text: "Contact", icon: "bx bxs-message-dots" },
	];

	return (
		<ul className={styles["nav-menu"]}>
			{navItems.map((item, index) => (
				<NavItem key={index} id={item.sectionId} text={item.text} icon={item.icon} />
			))}
		</ul>
	);
};

export default NavMenu;
