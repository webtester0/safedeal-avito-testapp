import { combineReducers } from 'redux'

import photos from './photos';
import item from './item'

export default combineReducers({
    photos,
    item
})