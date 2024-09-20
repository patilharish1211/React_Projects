import { DECREMENT, INCREMENT } from "../ActionType"

export function incrementCount () {
    return {type : INCREMENT, payload : 1}
}

export function decrementCount () {
    return {type : DECREMENT, payload : -1}
}