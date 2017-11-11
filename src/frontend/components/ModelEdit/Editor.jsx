import React from 'react';

export default class Editor extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        $(this.modal).modal({
            keyboard: false,
            show: false
        });
    }
    componentWillReceiveProps(props) {
        if (this.props.open !== props.open) {
            $(this.modal).modal(props.open ? 'show' : 'hide');
        }
    }

    render() {

        const {
            onChangeModalState,
            children,
            title,
            onSave,
            onDelete
        } = this.props;
        return (
            <div 
                ref={(e) => this.modal = e} 
                className="modal fade" 
                tabIndex="-1" 
                role="dialog" 
                aria-labelledby="myModalLabel" 
                aria-hidden="true">
                <div 
                    onClick={() => onChangeModalState(false)}
                    style={{
                        position: 'fixed',
                        top:0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}>
                </div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button 
                                onClick={() => onChangeModalState(false)}
                                type="button" 
                                className="close"  
                                aria-hidden="true">&times;</button>
                            <h4 className="modal-title" id="myModalLabel">{title}</h4>
                        </div>
                        <div className="modal-body">
                            { children }
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-danger" 
                                onClick={() => onDelete()}   
                                style={{float: 'left'}}
                            >Удалить</button>
                            <button 
                                type="button" 
                                className="btn btn-default" 
                                onClick={() => onChangeModalState(false)}   
                            >Закрыть</button>
                            <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={() => onSave()}
                            >Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}