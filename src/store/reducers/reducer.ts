import actionTypes from '../actionTypes'

const initialState = {
    isReady: false,
    photos: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                isReady: true
            }
        case actionTypes.PHOTOS_READY: 
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
};