import { GET_LBC, ERROR_GET_LBC} from '../actions'

export default function(state = null, action) {
    switch(action.type) {
        case GET_LBC :
            return action.payload
        case ERROR_GET_LBC :
            return action.errors
        
        default :
            return state
    }
}