import axios from 'axios';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const EDIT_ITEM_REQUEST = 'EDIT_ITEM_REQUEST';
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const FETCH_ITEM_REQUEST = 'FETCH_ITEM_REQUEST';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';

const url = `http://localhost:8080`;

export const fetchItems = () => (dispatch) => {
    dispatch({ type: FETCH_REQUEST });

    return axios
        .get(`${url}/api/notes/`)
        .then(({ data }) => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: {
                    data
                }
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAILURE });
        });
};


export const fetchItem = (id) => (dispatch) => {
    dispatch({ type: FETCH_ITEM_REQUEST });

    return axios
        .get(`${url}/api/notes/${id}`, {
        })
        .then(({ data }) => {
            dispatch({
                type: FETCH_ITEM_SUCCESS,
                payload: {
                    data
                },
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_ITEM_FAILURE });
        });
};


export const addItem = (itemContent) => (dispatch) => {
    dispatch({ type: ADD_ITEM_REQUEST });

    return axios
        .post(`${url}/api/notes/`, {
            ...itemContent
        })
        .then(({ data }) => {
            dispatch({
                type: ADD_ITEM_SUCCESS,
                payload: {
                    data
                },
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_ITEM_FAILURE });
        });
};

export const editItem = (id, itemContent) => (dispatch) => {
    dispatch({ type: EDIT_ITEM_REQUEST });

    return axios
        .patch(`${url}/api/notes/${id}`, {
            ...itemContent
        })
        .then(({ data }) => {
            dispatch({
                type: EDIT_ITEM_SUCCESS,
                payload: {
                    data
                },
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: EDIT_ITEM_FAILURE });
        });
};

export const removeItem = (id) => dispatch => {
    dispatch({ type: REMOVE_ITEM_REQUEST });

    return axios
        .delete(`${url}/api/notes/${id}`)
        .then(() => {
            console.log(id);
            dispatch({
                type: REMOVE_ITEM_SUCCESS,
                payload: {
                    id
                },
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REMOVE_ITEM_FAILURE });
        });
};
