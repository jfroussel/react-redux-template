import {
    READ_PRODUCT,
    ERROR_READ_PRODUCT
} from '../actions'

export default function (state = null, action) {
    switch (action.type) {
        case READ_PRODUCT:
            return action.payload
        case ERROR_READ_PRODUCT:
            return action.errors    

        default:
            
    }
    return state
}