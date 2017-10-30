import React from 'react';
import Input from 'Controls/Input.jsx';
import DateTimePicker from 'Controls/DateTimePicker.jsx';
import { Field, reduxForm } from 'redux-form';
import Row from 'Controls/Row.jsx';
import Col from 'Controls/Col.jsx';
import Checkbox from 'Controls/Checkbox.jsx';

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


function Item({ fields, name }) {
    switch (fields[name].type) {
    case 'date':
        return (
            <div>
                <Col number={6}>
                    <Field  
                        name={`${name}_begin`}
                        label={`${fields[name].title} (начало)`}
                        component={component(fields[name])}
                        {...type(fields[name])}
                    />
                </Col>
                <Col number={6}>
                    <Field  
                        name={`${name}_end`}
                        label={`${fields[name].title} (окончание)`}
                        component={component(fields[name])}
                        {...type(fields[name])}
                    />
                </Col>
            </div>    
        );
    }
    return (
        <Col number={12}>
            
            <div style={{width:'90%', float:'left'}}>
                <Field  
                    name={name}
                    label={fields[name].title}
                    component={component(fields[name])}
                    // defaultValue={values === undefined ? fields[x].defaultValue : values[x]}
                    {...type(fields[name])}
                />
            </div>
            <div  style={{width:'10%'}}>
                <Field  
                    name={`${name}_active`}
                    component={Checkbox}
                />
            </div>
        </Col>
    );
}

let FilterForm = props => {
    const { handleSubmit, fields } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <Row>
                {
                    Object.keys(fields).map(x => (
                        !fields[x].hide && 
                        <Item 
                            key={x}
                            name={x}
                            fields={fields}
                        />
                    ))
                }
            </Row>
        </form>
    );
};

FilterForm = reduxForm({
    form: 'filter'
})(FilterForm);
  
export default FilterForm;
