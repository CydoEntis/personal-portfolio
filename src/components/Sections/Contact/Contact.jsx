import React from "react";

import SectionTitle from "../../UI/Titles/SectionTitle";
import styles from "./Contact.module.scss";

const Contact = () => {
	return (
		<section id="contact" className={styles.contact}>
			<SectionTitle title={"contact"} />
			<form>
				<input type="text" placeholder="Full Name" />
				<input type="email" placeholder="Email Address" />
				<textarea placeholder="Your Message" />
				<button>
					Send Message <i className="bx bx-send"></i>
				</button>
			</form>
		</section>
	);
};

export default Contact;
