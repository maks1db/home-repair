import React from 'react';
import Button from 'Controls/RaisedButton.jsx';
import styles from './Buttons.scss';

export default ( { onChangeModalState } ) => (
    <div className={styles.buttons}>
        <Button 
            onClick={() => onChangeModalState(true)}
            mini={true}
            option="primary"
            children={<i className="fa fa-plus" aria-hidden="true"></i>}
        />
        <Button 
            mini={true}
            option="success"
            children={<i className="fa fa-pencil-square-o" aria-hidden="true"></i>}
        />
        <Button 
            mini={true}
            option="danger"
            children={<i className="fa fa-times" aria-hidden="true"></i>}
        />
    </div>
);