import actionTypes from '../actionTypes'
import axios from 'axios';

export const setModalPhoto = (id: number) => dispatch => {
    axios
        .get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
        .then(result => {
            dispatch({
                type: actionTypes.SET_MODAL_PHOTO,
                payload: result.data
            })
        })
        .catch(error => console.log(error))
}
