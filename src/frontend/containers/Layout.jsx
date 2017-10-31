import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from 'Layout/Nav.jsx';
import Content from 'Layout/Content.jsx';
import Buttons from 'ModelEdit/Buttons.jsx';
import Editor from 'ModelEdit/Editor.jsx';
import EditorForm from 'ModelEdit/EditorForm.jsx';
import Table from 'ModelView/Table.jsx';
import {
    save,
    getItem,
    del 
} from 'actions/api';
import Filters from 'ModelView/Filters.jsx';
import { modalState,
    addFilter,
    changeFilter,
    deleteFilter
} from 'actions/appActions';

function mapStateToProps(state) {
    return {
        modalOpen: state.app.get('modal').open,
        title: state.app.get('mainModel').title,
        modelFields: state.app.get('mainModel').fields,
        items: state.app.get('items'),
        form: state.form.model,
        model: state.app.get('mainModel'),
        filterItems: state.app.get('filter').items
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onChangeModalState: (value) => dispatch(modalState(value)),
        onSave: () => dispatch(save()),
        onGetItem: (id) => dispatch(getItem(id)),
        onDelete: () => dispatch(del()),
        onAddFilter: (key) => dispatch(addFilter(key)),
        onChangeFilter: (id, key) => dispatch(changeFilter(id, key)),
        onDeleteFilter: (id) => dispatch(deleteFilter(id))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Layout extends Component {
    constructor() {
        super();
    }

    render() {

        const {
            modalOpen,
            onChangeModalState,
            title,
            modelFields,
            onSave,
            items,
            onGetItem,
            form, 
            model,
            onDelete,
            filterItems,
            onAddFilter,
            onChangeFilter,
            onDeleteFilter
        } = this.props;

        return (
            <div>
                <Nav />
                <Content>
                    <h3>{title}</h3>
                    {modelFields &&
                    <Filters 
                        fields={modelFields}
                        filterItems={filterItems}
                        onAddFilter={onAddFilter}
                        onChangeFilter={onChangeFilter}
                        onDeleteFilter={onDeleteFilter}
                    />}
                    {modelFields && 
                    <Table 
                        fields={modelFields}
                        items={items}
                        onGetItem={onGetItem}
                        sum={model.sum}
                    />}
                    {this.props.children}
                </Content>
                <Editor 
                    onChangeModalState={onChangeModalState}
                    open={modalOpen}  
                    title={title} 
                    onSave={onSave}
                    onDelete={onDelete}
                >
                    {(modelFields && modalOpen) && <EditorForm 
                        fields={modelFields}
                        values={form !== undefined ? form.values : {}}
                    />}
                </Editor>
                <Buttons 
                    onChangeModalState={onChangeModalState}
                />
            </div>
        );
    }
}