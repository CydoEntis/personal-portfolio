import React from "react";
import { Link } from "react-scroll";

import styles from "./NavItem.module.scss";

const NavItem = ({ className, id, icon, text, onClick }) => {
	return (
		<li className={`${className} ${styles["nav-item"]}`} onClick={onClick}>
			<Link
				activeClass={styles.active}
				to={id}
				spy={true}
				smooth={true}
				offset={-64}
				duration={600}>
				<i className={`${icon} ${styles["nav-item--icon"]}`} />
				<p className={styles["nav-item--text"]}>{text}</p>
			</Link>
		</li>
	);
};

export default NavItem;
