import React from 'react';
import FilterForm from './FilterForm.jsx';
import Button from 'Controls/Button.jsx';

export default class Filters extends React.PureComponent {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                Фильтры таблицы
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse">
                        <div className="panel-body">
                            <FilterForm 
                                fields={this.props.fields}
                            />
                            <div style={{textAlign:'right'}}>
                                <Button 
                                    option="success"
                                >Применить</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}