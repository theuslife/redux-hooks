const initalState = {
    counter: 0
}

export const rootReducer = (state = initalState, { type }) => {
    switch (type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1000 }
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1000 }
        default:
            return state
    }
}