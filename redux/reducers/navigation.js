export const constants = {
    DIMMER_OPEN: 'DIMMER_OPEN',
    DIMMER_CLOSED: 'DIMMER_CLOSED'
}

export const actions = {
    openDimmer () {
        return {
            type: constants.DIMMER_OPEN,
            open: true
        }
    },

    closeDimmer () {
        return {
            type: constants.DIMMER_CLOSED,
            open: false
        }
    }
}

export const initialState = {
    open: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.DIMMER_OPEN: 
            return {
                ...state,
                open: action.open
            }
        case constants.DIMMER_CLOSED: 
            return {
                ...state,
                open: action.open
            }
        default:
            return state
    }
}