import React from 'react';
import Input from 'Controls/Input.jsx';
import DateTimePicker from 'Controls/DateTimePicker.jsx';
import { Field, reduxForm } from 'redux-form';
import Row from 'Controls/Row.jsx';
import Col from 'Controls/Col.jsx';
import Checkbox from 'Controls/Checkbox.jsx';
import Select from 'Controls/Select.jsx';
import Button from 'Controls/Button.jsx';
import styles from './Filters.scss';
import Options from 'ModelEdit/Options.jsx';

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
    else if (field.type === 'list') {
        return Select;
    }
    return Input;
}

const SelectFields = ( { fields, onChange, value } ) => (
    <Select label="Поле" onChange={onChange} value={value}>
        {Object.keys(fields).map( x=>
            !fields[x].hide && <option value={x} key={x}>{fields[x].title}</option>
        )}
    </Select>
);

function Item({ fields, name }) {

    const item = fields[name];

    switch (item.type) {
    case 'date':
        return (
            <Row>
                <Col number={6}>
                    <Field  
                        name={`${name}_begin`}
                        label={`${item.title} (начало)`}
                        component={component(item)}
                        {...type(item)}
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
            </Row>    
        );
    case 'list': 
        return <Field  
            name={name}
            label={item.title}
            component={component(item)}
            children={<Options field={item}/>}
            {...type(item)}
        />;
    }
    return (
        <Field  
            name={name}
            label={item.title}
            component={component(item)}

            {...type(item)}
        />
    );
}

class FilterForm extends React.PureComponent{
    
    render() {
        const { handleSubmit, fields, filterItems, onChangeFilter, onDeleteFilter } = this.props;
        return (
            filterItems && <form onSubmit={ handleSubmit }>

                {
                    filterItems.map(x => (
                        <Row key={x.id}>
                            <Col number={6}>
                                <div className={styles.remove}>
                                    <div>
                                        <Button 
                                            children="Удалить"
                                            option="warning"
                                            onClick={() => onDeleteFilter(x.id)}
                                            className={styles.remove}
                                        />
                                    </div>
                                    <div>
                                        <SelectFields 
                                            fields={fields}
                                            onChange={(e) => onChangeFilter(x.id, e.target.value)}
                                            value={x.key}
                                        />
                                    </div>
                                </div>
                                
                            </Col>
                            <Col number={6}>
                                {x.key && <Item 
                                    name={x.key}
                                    fields={fields}
                            
                                />}
                            </Col>                        
                        </Row>
                    ))
                }

            </form>
        );
    }}
  
export default reduxForm({
    form: 'filter'
})(FilterForm);
