import React from "react";
import { Link as ReactLink } from "react-scroll";
import Link from "../../UI/Links/Link";

import resume from "../../../assets/Cody-Stine-Resume.pdf";

import styles from "./About.module.scss";

const About = () => {
	return (
		<section id="about" className={styles.about}>
			<h1>
				<span>&lt;/</span>Cody Stine<span>&gt;</span>
			</h1>
			<p>Web Developer</p>
			<div className={styles.socials}>
				<Link className={"bxl-github"} link={"https://github.com/CydoEntis"} />{" "}
				<Link
					className={"bxl-linkedin"}
					link={"https://www.linkedin.com/in/cody-stine-06857814a/"}
				/>
			</div>
			<div className={styles["about--controls"]}>
				<a
					href={resume}
					download
					className={`${styles["about-btn"]} ${styles["about-btn--border"]}`}>
					Download Cv
				</a>
				<ReactLink
					className={styles["about-btn"]}
					to={"contact"}
					spy={true}
					smooth={true}
					offset={-64}
					duration={600}>
					Contact
				</ReactLink>
			</div>
		</section>
	);
};

export default About;
