import React from 'react';
import styles from './Checkbox.scss';
import deleteProps from 'deleteProps.js';
import ClassName from 'className.js';

export default (props) => (
    <div {...ClassName({[styles.error]: props.errorMessage !== false}, `checkbox ${styles.checkbox}`)}>
        <label >
            <input 
                type="checkbox" 
                checked={props.input.value}
                onChange={(e) => props.input.onChange(e.target.checked)}
                {...deleteProps(props, 'errorMessage')} /> {props.label}
        </label>
    </div>
);