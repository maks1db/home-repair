import React, { Component } from 'react';
import { connect } from 'react-redux';
import model from 'models/plan';
import { setMainModel } from 'actions/appActions';
import { get } from 'actions/api';

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onSetModel: () => dispatch(setMainModel(model)),
        onGet: () => dispatch(get())
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Plan extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.onSetModel();
        this.props.onGet();
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}