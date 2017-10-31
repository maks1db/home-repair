import React from 'react';
import Input from 'Controls/Input.jsx';
import DateTimePicker from 'Controls/DateTimePicker.jsx';
import { Field, reduxForm } from 'redux-form';
import Row from 'Controls/Row.jsx';
import Col from 'Controls/Col.jsx';
import Checkbox from 'Controls/Checkbox.jsx';
import Select from 'Controls/Select.jsx';

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

const SelectFields = ( { fields } ) => (
    <Select>
        {Object.keys(fields).map( x=>
            <option value={x}>{fields[x].title}</option>
        )}
    </Select>
);

function Item({ fields, name }) {

    const item = fields[name];
    if (!item) return;

    switch (item.type) {
    case 'date':
        return (
            <div>
                <Col number={6}>
                    <SelectFields 
                        fields={fields}
                    />
                </Col>
                <Col number={6}>
                    <Field  
                        name={`${name}_end`}
                        label={`${item.title} (окончание)`}
                        component={component(item)}
                        {...type(item)}
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
                    label={item.title}
                    component={component(item)}
     
                    {...type(item)}
                />
            </div>
        </Col>
    );
}

let FilterForm = props => {
    const { handleSubmit, fields, filterItems } = props;
    return (
        filterItems && <form onSubmit={ handleSubmit }>
            <Row>
                {
                    filterItems.map(x => (
                        <Row>

                            <Col number={6}>
                                <Item 
                                    key={x}
                                    name={x}
                                    fields={fields}
                                />
                            </Col>                        
                        </Row>
                        
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
