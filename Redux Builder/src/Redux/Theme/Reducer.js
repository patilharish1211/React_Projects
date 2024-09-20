import { TOGGLE_THEME } from "../ActionType";

const initialState = {
    theme : 'light',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME :
            return {
                ...state, theme : state.theme === 'light' ? 'dark' : 'light',
            };
        default:
            return state
    }
}