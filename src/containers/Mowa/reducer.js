// import { createReducer } from 'redux-starter-kit';
import action from './action';
import * as actionType from './actionType';
import { CREATE_POST, UPDATE_POST, DELETE_POST } from './actionType';

const initState = {
    mowaReducer: 'has called',
};
export default function mowaReducer(state = initState, action) {
    switch (action.type) {
        case CREATE_POST: {
            const { id, title } = action.payload;
            // Omit actual code
            console.info('£££ CREATE_POST CALLED IN REDUCER : ', id, title);
            return { ...state };
        }
        case UPDATE_POST: {
            // Omit actual code
            console.info('£££ UPDATE_POST CALLED IN REDUCER');
            break;
        }
        case DELETE_POST: {
            // Omit actual code
            console.info('£££ DELETE_POST CALLED IN REDUCER');
            break;
        }

        default:
            return state;
    }
}
