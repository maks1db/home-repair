import constants from 'constants/appConstants';
import { Map, List, setIn, getIn } from 'immutable';

const initialState = Map({
    modal: {
        open: false
    },
    token: '',
    mainModel: {},
    items: {isFetching: false, data: []},
    filter: {
        items:  List([]),
        query: Map({}),
        sort: Map({})      
    },
    itemSave: false,
    sort: Map({})
});

export default (state = initialState, action) => {
    switch (action.type) {
    case constants.MODAL_STATE:
        return setIn(state, ['modal', 'open'], action.value);
    case constants.SET_MAIN_MODEL: 
        return state.set('mainModel', action.model)
            .set('sort', Map(action.sort || action.model.sort))
            .set('filter', {
                items:  List(action.items || []),
                query: Map(action.query || {}),
                sort: Map(action.sort || action.model.sort)     
            });
    case constants.SET_FILTER: 
        return state.set('filter', action.data);
    case constants.ITEMS_RECEIVE:
        return state.set('items', {
            isFetching: false,
            data: action.items
        });
    case constants.ADD_FILTER: 
        return setIn(state, ['filter', 'items'], List(getIn(state, ['filter', 'items']).push({
            id: new Date().valueOf(),
            key: action.key
        })));
    case constants.CHANGE_FILTER: 
        return setIn(state, ['filter', 'items'], List(getIn(state, ['filter', 'items']).toJS().map(x => {
            if (x.id === action.id) {
                x.key = action.key;
            }
            return x;
        })));
    case constants.DELETE_FILTER: 
        return setIn(state, 
            ['filter', 'items'], 
            List(getIn(state, ['filter', 'items']).toJS().filter(x => x.id !== action.id)));
    case constants.COPY_FILTER: 
        return setIn(state, 
            ['filter', 'query'], 
            Map(action.filter));
    case constants.CHANGE_SORT: 
        return state.set('sort', Map(action.sort));
    case constants.LOGIN_RECEIVE:
        return state.set('token', action.token);
    case constants.SAVE_REQUEST:
        return state.set('itemSave', true);
    case constants.SAVE_COMPLETE:
        return state.set('itemSave', false);
    }
    
    
    return state;
};