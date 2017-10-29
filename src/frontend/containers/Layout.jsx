import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from 'Layout/Nav.jsx';
import Content from 'Layout/Content.jsx';
import Buttons from 'ModelEdit/Buttons.jsx';
import Editor from 'ModelEdit/Editor.jsx';
import EditorForm from 'ModelEdit/EditorForm.jsx';

import { modalState } from 'actions/appActions';

function mapStateToProps(state) {
    var a = 1;
    return {
        modalOpen: state.app.get('modal').open,
        title: state.app.get('mainModel').title,
        modelFields: state.app.get('mainModel').fields
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onChangeModalState: (value) => dispatch(modalState(value))
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
            modelFields
        } = this.props;

        return (
            <div>
                <Nav />
                <Content>
                    <h3>{title}</h3>
                    {this.props.children}
                </Content>
                <Editor 
                    onChangeModalState={onChangeModalState}
                    open={modalOpen}  
                    title={title} 
                >
                    {modelFields && <EditorForm 
                        fields={modelFields}
                    />}
                </Editor>
                <Buttons 
                    onChangeModalState={onChangeModalState}
                />
            </div>
        );
    }
}