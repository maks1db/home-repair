import React from 'react';
import 'moment/min/moment.min.js';
import 'moment/locale/ru.js';
import d from 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js';


$.fn.size = function() {
    return this.length;
};
$.fn.datetimepicker = d;

export default class DateTimePicker extends React.Component {
    constructor()  {
        super();
    }

    componentDidMount() {
        let el = $(this.element);
        el.datetimepicker({
            allowInputToggle:true, 
            parseInputDate: function(varsa) {
                console.log(varsa);
            }
        }).on('dp.show, dp.change', (e) => console.log('sas'));

        $(document).on('dp.change change.dp change', function (e) {
            // here `e` is an event itself.
            // So, `e.target` should be a DOM element of the input field.
            if ($(e.target).data('object') === 'calendar1') {
                console.log('calendar1 just changed');
            } else {
                console.log('nope, we are waiting for calendar1 changes only');
            }
          });
    }

    render() {
        return (
        
            <div className="form-group">
                {this.props.label && <label>{this.props.label}:</label>}
                <div className='input-group date'>
                    <input 
                        onChange={(e) => console.log(e.target.value)}
                        type='text' 
                        ref={e=>this.element = e}
                        className="form-control datepickerinput" />
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
     
        );    
    }
}