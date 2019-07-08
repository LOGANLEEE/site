// postsDuck.js
const CREATE_POST = 'CREATE_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

export function addPost(id, title) {
    return {
        type: CREATE_POST,
        payload: { id, title },
    };
}

export function updatePost(id, title) {
    return {
        type: UPDATE_POST,
        payload: { id, title },
    };
}

export function deletePost(id, title) {
    return {
        type: DELETE_POST,
        payload: { id, title },
    };
}

const initialState = [];

export default function mowaReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_POST: {
            // Omit actual code
            console.info('£££ CREATE_POST CALLED IN REDUCER');
            break;
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
