import React from 'react';
import Input from 'Controls/Input.jsx';
import Select from 'Controls/Select.jsx';
import DateTimePicker from 'Controls/DateTimePicker.jsx';
import { Field, reduxForm, change } from 'redux-form';
import Row from 'Controls/Row.jsx';
import Col from 'Controls/Col.jsx';
import Options from './Options.jsx';
import ImgLoad from 'ImgLoad/ImgLoad.jsx';

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
    else if (field.type === 'img') {
        return ImgLoad;
    }

    return Input;
}

let EditorForm = props => {
    const { handleSubmit, fields, editorValues, dispatch, values } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <Row>
                {
                    Object.keys(fields).map(x => {
                        const field = fields[x];
                        return (!field.hide && <Col key={x} number={field.col || 12}>
                            <Field  
                                name={x}
                                label={field.title}
                                _onChange={field.onChange ? 
                                    (val) => dispatch(field.onChange(val, editorValues, 'model')) :
                                    undefined    
                                }
                                component={component(field)}
                                {...field.type==='list' && {children: <Options field={field} />}}
                                {...type(field)}
                                {...field.type==='img' && {
                                    minSize: field.min || 300,
                                    maxSize: field.max || 15000,
                                    imgType: field.imgType || ['jpg','jpeg','png'],
                                    title: field.title,
                                    defaultValue: editorValues[x] || null,
                                    onChange: (e) => dispatch(change('model', x, e.target.files[0])),
                                    deletePhotoItem: () => dispatch(change('model', x, null))
                                }}
                            />
                        </Col>
                        );})
                }
            </Row>
        </form>
    );
};

EditorForm = reduxForm({
    form: 'model'
})(EditorForm);
  
export default EditorForm;
