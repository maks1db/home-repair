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
    del,
    get 
} from 'actions/api';
import Filters from 'ModelView/Filters.jsx';
import { modalState,
    addFilter,
    changeFilter,
    deleteFilter,
    copyFilter,
    changeSort,
    logoutUser
} from 'actions/appActions';

function mapStateToProps(state) {
    return {
        modalOpen: state.app.get('modal').open,
        title: state.app.get('mainModel').title,
        modelFields: state.app.get('mainModel').fields,
        items: state.app.get('items'),
        form: state.form.model,
        model: state.app.get('mainModel'),
        filterItems: state.app.get('filter').items.toJS(),
        sort: state.app.get('sort').toJS(),
        path: state.routing.location.pathname,
        autorized: state.app.get('token') !== '',
        CustomView: state.app.get('mainModel').custom
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
        onDeleteFilter: (id) => dispatch(deleteFilter(id)),
        onCopyFilter: () => {
            dispatch(copyFilter());
            dispatch(get())
        },
        onChangeSort: (key) => {
            dispatch(changeSort(key));
            dispatch(get());
        },
        onLogout: () => dispatch(logoutUser()) 
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
            onDeleteFilter,
            onCopyFilter, 
            sort,
            onChangeSort,
            path,
            autorized,
            onLogout,
            CustomView
        } = this.props;

        return (
            <div>
                <Nav
                    path={path}
                    autorized={autorized}
                    onLogout={onLogout}
                />
                <Content>
                    <h3>{title}</h3>
                    {(modelFields && autorized) &&
                    <Filters 
                        fields={modelFields}
                        filterItems={filterItems}
                        onAddFilter={onAddFilter}
                        onChangeFilter={onChangeFilter}
                        onDeleteFilter={onDeleteFilter}
                        onCopyFilter={onCopyFilter}
                    />}
                    {(modelFields && autorized) &&
                        (CustomView ? 
                        <CustomView 
                        items={items}
                        />
                        :
                        <Table 
                        fields={modelFields}
                        items={items}
                        onGetItem={onGetItem}
                        sum={model.sum}
                        sort={sort}
                        onChangeSort={onChangeSort}
                    />)}
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
                        editorValues={(form && form.values) || {}}
                    />}
                </Editor>
                {autorized && <Buttons 
                    onChangeModalState={onChangeModalState}
                    
                />}
            </div>
        );
    }
}