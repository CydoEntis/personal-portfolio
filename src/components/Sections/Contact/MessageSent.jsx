import React from 'react';

import styles from './Contact.module.scss';

const MessageSent = ({ children }) => {
	return <div className={styles.success}>{children}</div>;
};

export default MessageSent;
