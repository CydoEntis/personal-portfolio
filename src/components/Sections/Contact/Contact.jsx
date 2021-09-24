import React from "react";

import SectionTitle from "../../UI/Titles/SectionTitle";
import Error from "../../Errors/Error";

import styles from "./Contact.module.scss";

const Contact = () => {
	const onSubmitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<section id="contact" className={styles.contact}>
			<SectionTitle title={"contact"} />
			<form onSubmit={onSubmitHandler}>
				<input type="text" placeholder="Full Name" />
				<Error message={"Please enter a first and last name."} />
				<input type="email" placeholder="Email Address" />
				<Error message={"Please enter a valid email address."} />
				<textarea placeholder="Your Message" />
				<Error message={"Please don't leave the message field blank."} />
				<button>
					Send Message <i className="bx bx-send"></i>
				</button>
			</form>
		</section>
	);
};

export default Contact;
