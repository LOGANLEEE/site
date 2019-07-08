import { reduxBatch } from '@manaflair/redux-batch';
// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import mowaReducer from './containers/Mowa/reducer';

const reducer = {
    mowa: mowaReducer,
};

const middleware = [...getDefaultMiddleware(), logger];

// const preloadedState = {
//     todos: [
//         {
//             text: 'Eat food',
//             completed: true,
//         },
//         {
//             text: 'Exercise',
//             completed: false,
//         },
//     ],
//     visibilityFilter: 'SHOW_COMPLETED',
// };

const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
    // preloadedState,
    enhancers: [reduxBatch],
});

export default store;

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were automatically composed together
