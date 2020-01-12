import actionTypes from '../actionTypes'

const initialState = {
    photo: '',
    comments: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MODAL_PHOTO:
            return {
                ...state,
                photo: action.payload.url,
                comments: action.payload.comments,
            }
        default:
            return state;
    }
};

