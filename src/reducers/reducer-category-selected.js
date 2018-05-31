import {
    CATEGORY_SELECTED,
   
} from '../actions'

export default function (state = null, action) {
    switch (action.type) {
        case CATEGORY_SELECTED:
            return action.payload
         

        default:
            
    }
    return state
}