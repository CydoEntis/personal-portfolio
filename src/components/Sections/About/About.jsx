import React from "react";
import Button from "../../UI/Buttons/Button";

import styles from "./About.module.scss";

const About = () => {
	return (
		<section id="about" className={styles.about}>
			<h1>
				<span>&lt;/</span>Cody Stine<span>&gt;</span>
			</h1>
			<p>Web Developer</p>
			<div className={styles.socials}>
				<a href="https://github.com/CydoEntis">
					<i className="bx bxl-github"></i>
				</a>
				<a href="https://www.linkedin.com/in/cody-stine-06857814a/">
					<i className="bx bxl-linkedin"></i>
				</a>
			</div>
			<div className={styles["about--controls"]}>
				<Button className={`${styles["about-btn"]} ${styles["about-btn--right"]}`}>
					Download Cv
				</Button>
				<Button className={`${styles["about-btn"]} ${styles["about-btn--left"]}`}>
					Contact Me
				</Button>
			</div>
		</section>
	);
};

export default About;
