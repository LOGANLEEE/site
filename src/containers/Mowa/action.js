import { CREATE_POST, UPDATE_POST, DELETE_POST } from './actionType';

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
