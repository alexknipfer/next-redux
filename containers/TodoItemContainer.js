import { Component } from 'react'
import TodoItem from '../components/TodoItem/TodoItem'
import TodoView from '../components/TodoView/TodoView'
import { actions } from '../redux/modules/todo'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TodoItemContainer extends Component {
    render () {
        return (
            <div>
                <TodoView 
                    todoList={this.props.todos}
                    completedTodos={this.props.completedTodos}
                    addTodo={this.props.addTodo} 
                    removeTodo={this.props.removeTodo} 
                    addCompletedTodo={this.props.addCompletedTodo}
                    removeCompletedTodo={this.props.removeCompletedTodo}
                />
            </div>
        )
    }
}

const mapStateToProps = ({todo: { todos, completedTodos }}) => {
    return { 
        todos,
        completedTodos
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo: actions.addTodo,
        removeTodo: actions.removeTodo,
        addCompletedTodo: actions.addCompletedTodo,
        removeCompletedTodo: actions.removeCompletedTodo
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoItemContainer)