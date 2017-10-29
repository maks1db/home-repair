import constants from 'constants/appConstants';

export const modalState = (value) => {
    return {
        type: constants.MODAL_STATE,
        value
    };
};

export const setMainModel = (model) => {
    return {
        type: constants.SET_MAIN_MODEL,
        model
    };
};