import app from 'constants/appConstants';
import { push } from 'react-router-redux';
import axios from 'axios';
import { checkToken } from 'api/appApi';

export default store => next => action => {
    if (action.type === '@@router/LOCATION_CHANGE') {
        
        const state = store.getState();
        
        //check token
        if (state.app.get('token') === '') {
            let token = localStorage.getItem(app.TOKEN_LOCAL_STORAGE);

            if (token) {
                axios.defaults.headers.common = {
                    'Authorization': `${token}`,
                };
                checkToken(token)
                    .then(x => {
                        store.dispatch({
                            type: app.LOGIN_RECEIVE,
                            token: x.data.token,
                            role: x.data.role
                        });
                        action.role = x.data.role;
                        next(action);

                        //set autorize
                        axios.defaults.headers.common = {
                            'Authorization': `${x.data.token}`,
                        }; 
                    });
            }
            else {
                
                if (action.payload.pathname !== '/login'){
                    store.dispatch(push('/login'));   
                    
                }
                next(action); 
            }
        }
        else {
            next(action);
        }
    }

    if (action.type === app.LOGIN_RECEIVE) {
        localStorage.setItem(app.TOKEN_LOCAL_STORAGE, action.token);   
    }

    if (action.type === app.USER_REDIRECT) {
        store.dispatch(push('/'));      
    } 
    
    next(action);
};