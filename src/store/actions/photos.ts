import actionTypes from '../actionTypes'
import axios from 'axios';

export const setPhotos = () => dispatch => {
    dispatch({
        type: actionTypes.PHOTOS_REQUEST
    });
    axios
        .get('https://boiling-refuge-66454.herokuapp.com/images')
        .then(result => {
            dispatch({
                type: actionTypes.SET_PHOTOS,
                payload: result.data
            })
        })
        .catch(error => console.log(error))
}
