export const initialState = {
    details: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_DETAILS":
            return {
                ...state,
                details: action.details
            };

        case "SET_INPUT":
            return {
                ...state,
                input: action.input
            };
        default:
            return {
                ...state
            };
    }
}

export default reducer;