import React from 'react';
import Button from 'Controls/RaisedButton.jsx';
import styles from './Buttons.scss';

export default ( { onChangeModalState } ) => (

    <Button 
        onClick={() => onChangeModalState(true)}
        mini={true}
        option="primary"
        data-toggle="tooltip"
        data-placement="right"
        title="Добавить новый элемент"
        className={styles.add}
        children={<i className="fa fa-plus" aria-hidden="true"></i>}
    />

);