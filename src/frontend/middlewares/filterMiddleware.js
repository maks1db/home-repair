import constants from 'constants/appConstants';

export default store => next => action => {

    if (action.type === constants.COPY_FILTER) {
        const state = store.getState();
        const items = state.app.get('filter').items.toJS();
        const fields = state.app.get('mainModel').fields;
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
                    obj[x] = {
                        $gte: values[`${x}_begin`],
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
       
        action.filter = obj;
        next(action);

    }
    else {
        next(action);
    }
};