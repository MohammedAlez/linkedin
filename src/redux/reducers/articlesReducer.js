import * as actions from '../actions/actionTypes'

const initialState={
    articles:[],
    loadingState:false
}

const reducer=(state=initialState, action)=>{
    // console.log(action)
    switch(action.type){
        case actions.SET_LOADING_STATUS : 
            return {
                ...state,
                loadingState:action.status
            }   
        case actions.GET_ARTICLES : 
            return {
                ...state,
                articles:action.payload
            }
        default: return state
    }
}

export default reducer