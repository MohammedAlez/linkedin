import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articlesRecuder from './articlesReducer'
const rootReducer = combineReducers({
    userState: userReducer,
    articlesState:articlesRecuder
})

export default rootReducer