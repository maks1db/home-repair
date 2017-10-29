import React, { Component } from 'react';
import { connect } from 'react-redux';
import model from 'models/costs';
import { setMainModel } from 'actions/appActions';
import DateTimePicker from 'Controls/DateTimePicker.jsx';

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onSetModel: () => dispatch(setMainModel(model))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.onSetModel();
    }

    render() {

        return (
            <div>
                <DateTimePicker 
                    label="Датушка"
                />
            </div>
        );
    }
}