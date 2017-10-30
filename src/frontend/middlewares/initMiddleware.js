import constants from 'constants/appConstants';

const init = store => next => action => {

    if (action.type === constants.SET_MAIN_MODEL) {
        document.title = action.model.title;
    }

    next(action);

};

export default init;