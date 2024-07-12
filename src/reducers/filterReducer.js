const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'FILTER_WORDS':
            return action.payload.content
        default:
            return state
    }
}

export const filterWords = (content) => {
    return {
        type: 'FILTER_WORDS',
        payload: { content }
    }
}

export default filterReducer