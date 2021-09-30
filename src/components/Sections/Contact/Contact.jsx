import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import SectionTitle from '../../UI/Titles/SectionTitle';
import Error from '../../Errors/Error';
import MessageSent from './MessageSent';
import useInput from '../../../hooks/use-input';

import styles from './Contact.module.scss';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const Contact = () => {
	const [didSend, setDidSend] = useState(false);
	const [formEmpty, setFormEmpty] = useState(false);
	const [messageNotSent, setMessageNotSent] = useState(false);

	const {
		value: fullNameValue,
		isValid: fullNameIsValid,
		hasError: fullNameHasError,
		inputValueChangeHandler: fullNameChangeHandler,
		inputBlurHandler: fullNameBlurHandler,
		resetInputHandler: resetFullName,
	} = useInput(isNotEmpty);

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		inputValueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		resetInputHandler: resetEmail,
	} = useInput(isEmail);

	const {
		value: messageValue,
		isValid: messageIsValid,
		hasError: messageHasError,
		inputValueChangeHandler: messageChangeHandler,
		inputBlurHandler: messageBlurHandler,
		resetInputHandler: resetMessage,
	} = useInput(isNotEmpty);

	const resetForm = () => {
		resetFullName();
		resetEmail();
		resetMessage();
	};

	let formIsValid = false;

	if (fullNameIsValid && emailIsValid && messageIsValid) {
		formIsValid = true;
	}

	const submitHandler = (e) => {
		e.preventDefault();

		if (!formIsValid) {
			setFormEmpty(true);
			return;
		}

		emailjs
			.sendForm('service_0cyxpne', 'template_098ehfo', e.target, 'user_CisqUqkbbdBKLErxv4yts')
			.then((res) => {
				setDidSend(true);

				setTimeout(() => {
					setDidSend(false);
				}, 1500);
			})
			.catch((e) => {
				setMessageNotSent(true);

				setTimeout(() => {
					setMessageNotSent(false);
				}, 1500);
			});

		resetForm();
	};

	return (
		<section id="contact" className={styles.contact}>
			<SectionTitle title={'contact'} />
			<form onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="Full Name"
					onChange={fullNameChangeHandler}
					onBlur={fullNameBlurHandler}
					value={fullNameValue}
					name="fullname"
				/>
				{fullNameHasError && <Error message={'Please enter a first and last name.'} />}
				<input
					type="email"
					placeholder="Email Address"
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={emailValue}
					name="email"
				/>
				{emailHasError && <Error message={'Please enter a valid email address.'} />}
				<textarea
					placeholder="Your Message"
					onChange={messageChangeHandler}
					onBlur={messageBlurHandler}
					value={messageValue}
					name="message"
				/>
				{messageHasError && <Error message={"Please don't leave the message field blank."} />}
				{formEmpty && <Error message={'Please fill out entire form.'} />}
				<button type="submit">
					Send Message <i className="bx bx-send"></i>
				</button>
				{didSend && <MessageSent>Your message has been sent</MessageSent>}
				{messageNotSent && <Error message={'An error occured. Message was not sent.'}></Error>}
			</form>
		</section>
	);
};

export default Contact;
