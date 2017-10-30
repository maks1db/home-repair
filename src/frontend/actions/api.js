import constants from 'constants/appConstants';

export const save = () => {
    return {
        type: constants.SAVE_REQUEST
    };
};

export const edit = () => {
    return {
        type: constants.ITEM_REQUEST
    };
};

export const get = () => {
    return {
        type: constants.ITEMS_REQUEST
    };
};

export const getItem = (value) => {
    return {
        type: constants.ITEM_REQUEST,
        value
    };
};