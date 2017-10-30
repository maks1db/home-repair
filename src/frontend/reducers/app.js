import constants from 'constants/appConstants';
import { Map, setIn } from 'immutable';

const initialState = Map({
    modal: {
        open: false
    },
    mainModel: {},
    items: {isFetching: false, data: []}
});

export default (state = initialState, action) => {
    switch (action.type) {
    case constants.MODAL_STATE:
        return setIn(state, ['modal', 'open'], action.value);
    case constants.SET_MAIN_MODEL: 
        return state.set('mainModel', action.model);
    case constants.ITEMS_RECEIVE:
        return state.set('items', {
            isFetching: false,
            data: action.items
        });
    }
    
    return state;
};