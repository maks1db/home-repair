import React from 'react';
import Input from 'Controls/Input.jsx';
import DateTimePicker from 'Controls/DateTimePicker.jsx';
import { Field, reduxForm } from 'redux-form';
import Row from 'Controls/Row.jsx';
import Col from 'Controls/Col.jsx';

function type(field) {

    let obj = {};

    if (field.type === 'string') {
        obj.type = 'text';
    }
    else if (field.type === 'int') {
        obj.type = 'number';
    }
    else if (field.type === 'date') {
        obj.type = 'text';
    }

    return obj;
}

function component(field) {

    if (field.type === 'date') {
        return DateTimePicker;
    }

    return Input;
}

let EditorForm = props => {
    const { handleSubmit, fields, values } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <Row>
                {
                    Object.keys(fields).map(x => (
                        !fields[x].hide && <Col key={x} number={fields[x].col || 12}>
                            <Field  
                                name={x}
                                label={fields[x].title}
                                component={component(fields[x])}
                                defaultValue={values === undefined ? fields[x].defaultValue : values[x]}
                                {...type(fields[x])}
                            />
                        </Col>
                    ))
                }
            </Row>
        </form>
    );
};

EditorForm = reduxForm({
    form: 'model'
})(EditorForm);
  
export default EditorForm;
