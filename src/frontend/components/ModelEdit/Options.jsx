import React from 'react';

export default ( {field}) => [
    field.values.map(x => (
        <option key={x}>{x}</option>
    ))
];