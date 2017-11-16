import constants from 'constants/appConstants';
import { destroy } from 'redux-form';
import { loadavg } from 'os';

export default store => next => action => {

    if (action.type === constants.COPY_FILTER) {
        const state = store.getState();
        const items = state.app.get('filter').items.toJS();
        const fields = state.app.get('mainModel').fields;
        const name = state.app.get('mainModel').name;
        const values = state.form.filter.values;
        let obj = {};

        if (values) {
            Object.keys(fields).forEach(x => {
                if (items.find(f => f.key === x) === undefined) {
                    return;
                } 

                if (values[x] === undefined && 
                    (values[`${x}_begin`] === undefined && values[`${x}_end`] === undefined)) {
                    return;
                }
                
                const item = fields[x];
                if (item.type === 'date') {
                    const d = values[`${x}_begin`];
                    obj[x] = {
                        $gte: new Date(d.getFullYear(), d.getMonth(), d.getDate(),0,0,0),
                        $lt: values[`${x}_end`]
                    };
                }
                else if (item.type === 'string') {
                    obj[x] = {$regex: values[x], $options: 'i'};    
                }
                else {
                    obj[x] = values[x];
                }
            });
        }
        localStorage.setItem(`query_${name}`, JSON.stringify({
            result: obj,
            items, values
        }));
        action.filter = obj;
        next(action);

    }
    else if (action.type === constants.CHANGE_SORT) {
        const state = store.getState();
        let sort = state.app.get('sort').toJS();
        const key = Object.keys(sort)[0];
        const name = state.app.get('mainModel').name;

        if (key === action.key) {
            sort[key] = - sort[key];
        }
        else {
            sort = {[action.key]: -1};
        }

        localStorage.setItem(`sort_${name}`, JSON.stringify(sort));
        action.sort = sort;
        next(action);
    }
    else if (action.type === constants.SET_MAIN_MODEL) {
        store.dispatch(destroy(['model', 'filter']));
        next(action);
    }
    else {
        next(action);
    }
};