import {
    READ_PHONE_NUMBER,
    ERROR_READ_PHONE_NUMBER,
} from '../actions'

export default function (state = null, action) {
    switch (action.type) {
        case READ_PHONE_NUMBER:
            return action.payload
        case ERROR_READ_PHONE_NUMBER:
            return action.errors 

        default:
           
    }
    return state
}