import React from "react";

import styles from "./Button.module.scss";

const Button = ({ className, children }) => {
	return <button className={`${styles.btn} ${className}`}>{children}</button>;
};

export default Button;
