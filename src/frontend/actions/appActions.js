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

export const copyFilter = () => {
    return {
        type: constants.COPY_FILTER
    };
};

export const addFilter = (key) => {
    return {
        type: constants.ADD_FILTER,
        key
    };
};

export const deleteFilter = (id) => {
    return {
        type: constants.DELETE_FILTER,
        id
    };
};

export const changeFilter = (id, key) => {
    return {
        type: constants.CHANGE_FILTER,
        id, key
    };
};

export const changeSort = (key) => {
    return {
        type: constants.CHANGE_SORT,
        key
    };
};