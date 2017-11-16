import React from 'react';
import FilterForm from './FilterForm.jsx';
import Button from 'Controls/Button.jsx';
import styles from './Filters.scss';

export default class Filters extends React.PureComponent {

    render() {

        const {
            filterItems
        } = this.props;
        return (
            <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                Фильтры {filterItems.length > 0 && `(${filterItems.length} поз.)`}
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse">
                        <div className="panel-body">
                            <FilterForm 
                                {...this.props}
                            />
                            <div className={styles.filters}>
                                <Button 
                                    onClick={() => {
                                        const {fields, filterItems, onAddFilter } = this.props;
                                        let name = '';
                                        Object.keys(fields).forEach(x => {
                                            if (fields[x].hide) return;

                                            if (!filterItems.find(f => f.key === x) && name === '') {
                                                name = x;
                                                onAddFilter(name);
                                            }
                                        }); 
                                    }}
                                    option="primary"

                                >Добавить</Button>
                                <Button 
                                    onClick={() => this.props.onCopyFilter()}
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