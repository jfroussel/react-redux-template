import { READ_ALL_PRODUCTS, ERROR_READ_ALL_PRODUCTS} from '../actions'

export default function(state = null, action) {
    switch(action.type) {
        case READ_ALL_PRODUCTS :
            return action.payload
        case ERROR_READ_ALL_PRODUCTS :
            return action.errors
        
        default :
            return state
    }
}