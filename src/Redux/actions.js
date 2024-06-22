export const SET_JOB_CATEGORY = 'SET_JOB_CATEGORY';
export const SET_PLACE = 'SET_PLACE';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export const setJobCategory = (category) => ({
    type: SET_JOB_CATEGORY,
    payload: category,
});

export const setPlace = (place) => ({
    type: SET_PLACE,
    payload: place,
});

export const setSearchResults = (results) => ({
    type: SET_SEARCH_RESULTS,
    payload: results,
});

  