import React from 'react';
import deleteProps from 'deleteProps.js';
import ClassName from 'className.js';
import styles from './MainInput.scss';  
import Inputmask from 'react-input-mask';

const Control = (props) => {
    if (props.control === 'input') return <Inputmask {...deleteProps(props, 'control')} />;
    else if (props.control === 'textarea') return <textarea {...deleteProps(props, 'control')} />;
    else if (props.control === 'select') return <select {...deleteProps(props, 'control')}
    />;
};

export default class Input extends React.Component {
    
    render() {
        const {
            errorMessage,
            input: { value, onChange } 
        } = this.props;

        return (
            <div {...ClassName({'has-error': errorMessage  !== undefined && errorMessage !== false, 
                'has-feedback': errorMessage  !== undefined && errorMessage !== false},'form-group')}>
                {this.props.label && <label>{this.props.label}:</label>}
                <Control 
                    type="text" 
                    className="form-control" 
                    defaultValue={value}
                    onChange={(e) => onChange(e.target.value) }
                    {...deleteProps(this.props, ['onValidation','reqired', 'errorMessage'])}
                />
                {(errorMessage  !== undefined && errorMessage !== false) && (<span className="glyphicon glyphicon-remove form-control-feedback"></span>)}
                {(errorMessage  !== undefined &&errorMessage !== false) && (<label className={styles.error}>{errorMessage}</label>)}
            </div>
        );
    }
}