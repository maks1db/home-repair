import React from 'react';
import styles from './Layout.scss';

export default (props) => <div className={styles.content}>{props.children}</div>;