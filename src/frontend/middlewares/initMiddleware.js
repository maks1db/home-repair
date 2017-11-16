import constants from 'constants/appConstants';
import { change } from 'redux-form';

const init = store => next => action => {

    if (action.type === constants.SET_MAIN_MODEL) {
        document.title = action.model.title;

        const query = JSON.parse(localStorage.getItem(`query_${action.model.name}`) || '{}');
        const sort = localStorage.getItem(`sort_${action.model.name}`);
        const values = query.values || {};

        Object.keys(values).forEach(x => {
            store.dispatch(change('filter', x, values[x]));
        });

        action.query = query.result;
        action.items = query.items;
        action.sort = sort && JSON.parse(sort);
        next(action);
    }
    else {
        next(action);
    }
    

};

export default init;