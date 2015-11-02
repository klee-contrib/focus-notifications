export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR'

//
export function clearError() {
    return {
        type: CLEAR_ERROR
    };
}

export function setError({type, content}) {
    console.log('type', type, 'content', content);
    return {
        type: SET_ERROR,
        payload: {type, content}
    };
}
