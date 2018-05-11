import { REST_COUNTRIES_ALL, REST_COUNTRIES_ALL_ERRORS} from '../actions'

export default function(state = null, action) {
    switch(action.type) {
        case REST_COUNTRIES_ALL :
            return action.payload
        case REST_COUNTRIES_ALL_ERRORS :
            return action.errors
        
        default :
            return state
    }
}