import { combineReducers } from 'redux'
import navigation from './navigation'
import todo from './todo'

export default combineReducers({
    navigation,
    todo
})
