export const constants = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    COMPLETE_TODO: 'COMPLETE_TODO',
    REMOVE_COMPLETED_TODO: 'REMOVE_COMPLETED_TODO'
}

let nextTodoId = 0

export const actions = {
    addTodo(itemName, itemDescription) {
        return {
            type: constants.ADD_TODO,
            itemToAdd: { 
                itemName: itemName, 
                itemDescription: itemDescription,
                id: nextTodoId++
            }
        } 
    },
    removeTodo(id) {
        return {
            type: constants.REMOVE_TODO,
            id: id
        }
    },
    addCompletedTodo(item) {
        return {
            type: constants.COMPLETE_TODO,
            itemToComplete: item
        }
    },
    removeCompletedTodo(id) {
        return {
            type: constants.REMOVE_COMPLETED_TODO,
            id: id
        }
    }
}

export const initialState = {
    todos: [],
    completedTodos: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.itemToAdd]
            }
            
        case constants.REMOVE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((item) => item.id !== action.id)],
            }

        case constants.COMPLETE_TODO:
            return {
                ...state,
                completedTodos: [...state.completedTodos, action.itemToComplete]
            }

        case constants.REMOVE_COMPLETED_TODO:
            return {
                ...state,
                completedTodos: [...state.completedTodos.filter((item) => item.id !== action.id)]
            }

        default: 
            return state
    }
}

