import { combineReducers } from 'redux'

const initialReducer = (selectedReducer = null, action) => {
    return(selectedReducer);
}

export default combineReducers({
    selectedReducer: initialReducer,
});