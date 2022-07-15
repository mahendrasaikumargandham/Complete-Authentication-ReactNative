export const initialState = {
    classes: [],
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_ARCHIVE':
            return {
                ...state,
                classes: [...state.classes, action.item]
            }
        default:
            return state;
    }
}

export default reducer;
