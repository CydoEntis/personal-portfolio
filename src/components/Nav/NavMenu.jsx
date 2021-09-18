import React, { useState } from "react";
import NavItem from "./NavItem";

import styles from "./NavMenu.module.scss";

const NavMenu = () => {
	const [activeState, setActiveState] = useState({
		activeItem: null,
		items: [
			{ id: 1, text: "About", icon: "bx bxs-user" },
			{ id: 2, text: "Resume", icon: "bx bxs-file" },
			{ id: 3, text: "Work", icon: "bx bxs-folder" },
			{ id: 4, text: "Contact", icon: "bx bxs-message-dots" },
		],
	});

	const toggleActiveState = (index) => {
		setActiveState({ ...activeState, activeItem: activeState.items[index] });
	};

	const toggleActiveClass = (index) => {
		if (activeState.items[index] === activeState.activeItem) return `${styles.active}`;
		else return "";
	};

	return (
		<ul className={styles["nav-menu"]}>
			{activeState.items.map((item, index) => (
				<NavItem
					key={index}
					className={toggleActiveClass(index)}
					text={item.text}
					icon={item.icon}
					onClick={() => {
						toggleActiveState(index);
					}}
				/>
			))}
		</ul>
	);
};

export default NavMenu;
