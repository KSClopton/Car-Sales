// import all your reducers
import { AddFeature } from './AddFeature'
import { RemoveFeature } from './RemoveFeature'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    AddItem: AddFeature,
    RemoveItem: RemoveFeature
    // You can also just name it the same name as what you called it in the function

})
export default allReducers;