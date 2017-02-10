export const constants = {
    ADD_TODO: 'ADD_TODO'
}

export const actions = {
    addTodo(itemToAdd) {
        return {
            type: ADD_TODO,
            itemToAdd: itemToAdd
        } 
    }
}

export const initialState = {
    todos: ['hello', 'goodbye']
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.ADD_TODO:
            return intialState.todos
        default: 
            return state
    }
}

