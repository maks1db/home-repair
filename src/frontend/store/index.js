import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';
import { routerMiddleware } from 'react-router-redux';
import initMiddleware from 'middlewares/initMiddleware';
import apiMiddleware from 'middlewares/apiMiddleware';
import filterMiddleware from 'middlewares/filterMiddleware';

const composeEnhancers = process.env.DEV ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

export default function configureStore(history) {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(
            thunkMiddleware,
            routerMiddleware(history),
            initMiddleware,
            apiMiddleware,
            filterMiddleware       
        ))
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
