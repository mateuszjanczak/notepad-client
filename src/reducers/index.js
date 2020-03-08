import {ADD_ITEM_SUCCESS, EDIT_ITEM_SUCCESS, FETCH_ITEM_SUCCESS, FETCH_SUCCESS, REMOVE_ITEM_SUCCESS} from "actions";

const initialState = {notes: []};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                notes: action.payload.data
            };
        case FETCH_ITEM_SUCCESS:
            return {
                ...state,
                note: action.payload.data
            };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                notes: [...state.notes, action.payload.data]
            };
        case REMOVE_ITEM_SUCCESS:
            return {
                ...state,
                notes: state.notes.filter(item => item.id !== action.payload.id)
            };
        case EDIT_ITEM_SUCCESS:
            const note = action.payload.data;
            return {
                ...state,
                notes: state.notes.map(item => item.id === note.id ? note : item)
            };
        default:
            return state;
    }
};

export default rootReducer;
