import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch, ownProps) {
    return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                Ремонт дома
            </div>
        );
    }
}