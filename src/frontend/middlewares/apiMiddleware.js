import constants from 'constants/appConstants';
import api from 'api/crud';
import { change } from 'redux-form';
import { toastr } from 'react-redux-toastr';

const form = 'model';

const apiMiddleware = store => next => action => {

    if (action.type === constants.SAVE_REQUEST) {
        
        const state = store.getState();
        const model = state.app.get('mainModel');
        let obj = state.form.model.values;
        let fd;
        let hasImg = false; const imgKeys = [];
        Object.keys(model.fields).forEach(x => {
            if (model.fields[x].type === 'img'){
                hasImg = true;
                imgKeys.push(x);
            }
        });

        if (hasImg) {
            fd = new FormData();
            Object.keys(obj).forEach(x => {
                const item = imgKeys.indexOf(x) >= 0 ? (obj[x].length > 0 ? obj[x][0] : null) : obj[x];
                fd.append(x, item);
            });
        }

        const crud = new api(`crud/${model.name}`);
        if (obj._id) {
            crud.patch(obj._id, fd || obj)
                .then(() => {
                    store.dispatch({
                        type: constants.SAVE_COMPLETE
                    });

                    store.dispatch({
                        type: constants.ITEMS_REQUEST
                    });

                    toastr.success('Сохранено', 'Объект сохранен в базе данных...');
                });
        }
        else {
            crud.post(fd || obj)
                .then((x) => {
                    store.dispatch({
                        type: constants.SAVE_COMPLETE
                    });
                    store.dispatch(change(form, '_id', x.data.id));
                    store.dispatch({
                        type: constants.ITEMS_REQUEST
                    });
                    toastr.success('Сохранено', 'Объект сохранен в базе данных...');
                });
        }
        
    }
    if (action.type === constants.ITEM_REQUEST) {
        const state = store.getState();
        const model = state.app.get('mainModel');

        const crud = new api(`crud/${model.name}`); 
        crud.getItem(action.value)
            .then(x => {

                Object.keys(model.fields).forEach(o => {
                    store.dispatch(change(form, o, x.data[o]));
                }); 

                store.dispatch({
                    type: constants.MODAL_STATE,
                    value: true
                });
            });
    }

    if (action.type === constants.ITEMS_REQUEST) {
        const state = store.getState();
        const model = state.app.get('mainModel');
        const sort = state.app.get('sort').toJS();
        const crud = new api(`crud/${model.name}`); 
        const query = state.app.get('filter').query.toJS();

        crud.get({
            sort,
            query
        })
            .then(x => {
                store.dispatch({
                    type: constants.ITEMS_RECEIVE,
                    items: x.data.map(d => {
                        Object.keys(model.fields).forEach(f => {
                            if (model.fields[f].serialize) {
                                d[f] = model.fields[f].serialize(d[f]);
                            }
                        });
                        return d;
                    })
                }); 
            });
    }

    if (action.type === constants.ITEM_DELETE) {

        const state = store.getState();
        const model = state.app.get('mainModel');

        const crud = new api(`crud/${model.name}`); 

        crud.delete(state.form.model.values._id)
            .then(() => {
                store.dispatch({
                    type: constants.ITEM_DELETE_COMPLETE,
                }); 

                store.dispatch({
                    type: constants.MODAL_STATE,
                    value: false
                });

                store.dispatch({
                    type: constants.ITEMS_REQUEST
                });
            });
        
    }
    next(action);

};

export default apiMiddleware;