import React from 'react';
import Input from 'Controls/Input.jsx';
import { Field, reduxForm } from 'redux-form';

function type(field) {

    let obj = {};

    if (field.type === 'string') {
        obj.type = 'text';
    }
    else if (field.type === 'int') {
        obj.type = 'number';
    }

    return obj;
}

let EditorForm = props => {
    const { handleSubmit, fields } = props;
    return (
        <form onSubmit={ handleSubmit }>
            {
                Object.keys(fields).map(x => (
                    <Field 
                        key={x}
                        name={x}
                        label={fields[x].title}
                        component={Input}
                        {...type(fields[x])}
                    />
                ))
            }
        </form>
    );
};

EditorForm = reduxForm({
    form: 'model'
})(EditorForm);
  
export default EditorForm;

// export default () => (
//     <div>
//         <Input 
//             label="Сведения"  
//         />
//     </div>);