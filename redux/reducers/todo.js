export const constants = {
    ADD_TODO: 'ADD_TODO'
}

export const actions = {
    addTodo(itemName, itemDescription) {
        return {
            type: constants.ADD_TODO,
            itemToAdd: {itemName, itemDescription}
        } 
    }
}

export const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    console.log(state)
    switch(action.type) {
        case constants.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.itemToAdd]
            }
        default: 
            return state
    }
}

