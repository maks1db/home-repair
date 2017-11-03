import React from 'react';
import 'moment/min/moment.min.js';
import 'moment/locale/ru.js';
//import d from 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js';
import d from './vendor/bootstrap-datepicker';

$.fn.size = function() {
    return this.length;
};
$.fn.datetimepicker = d;

export default class DateTimePicker extends React.Component {
    constructor()  {
        super();
    }

    componentDidMount() {
        var a = 1;
        const {
            input: { value, onChange } 
        } = this.props;

        $(this.element).datetimepicker({
            callback: function(date) {
                onChange(date);
            },
            defaultDate: value,
            format: 'DD.MM.YYYY'
        });
    }

    render() {
        return (
        
            <div className="form-group">
                {this.props.label && <label>{this.props.label}:</label>}
                <div className='input-group date' ref={e=>this.element = e}>
                    <input 
                        type='text' 
                        className="form-control datepickerinput" />
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
     
        );    
    }
}