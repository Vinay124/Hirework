import {  SET_JOB_CATEGORY, SET_PLACE, SET_SEARCH_RESULTS  } from './actions';

const initialState = {
    jobCategory: '',
    place: '',
    searchResults: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOB_CATEGORY:
            return {...state, jobCategory: action.payload };
        case SET_PLACE:
            return {...state, place: action.payload };
        case SET_SEARCH_RESULTS:
            return {...state, searchResults: action.payload };
        default:
            return state;
    }
};

export default reducer;