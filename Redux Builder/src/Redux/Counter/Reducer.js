import { DECREMENT, INCREMENT } from "../ActionType"

const initialState = {
    counter : 0
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + action.payload };
        case DECREMENT:
            return { counter: state.counter + action.payload };
        default:
            return state;
    }
}