import constants from 'constants/appConstants';
import { loginUser as loginUserApi, logoutUser as logoutUserApi } from 'api/appApi';

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

export const loginUser = (login, password) => dispatch => {
    dispatch({
        type: constants.LOGIN_REQUEST
    });

    loginUserApi(login, password)
        .then(x => {

            if (!x.data.token) {
                toastr.error('Вход в систему', 'Неверный логин или пароль')
            }
            else {
                dispatch({
                    type: constants.LOGIN_RECEIVE,
                    token: x.data.token,
                    role: x.data.role
                });  
                
                dispatch({
                    type: constants.USER_REDIRECT
                });
            }
            
        });
};

export const logoutUser = () => dispatch => {
    dispatch({
        type: constants.LOGIN_REQUEST
    });
    const result = () => {
        dispatch({
            type: constants.LOGIN_RECEIVE,
            token: '',
            role: ''
        });  
        
        dispatch({
            type: constants.USER_REDIRECT
        });
    };

    logoutUserApi()
        .then(result, result);
};