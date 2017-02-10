import { Component } from 'react'
import ListView from '../components/ListView/ListView'
import TodoItem from '../components/TodoItem/TodoItem'
import { actions } from '../redux/reducers/todo'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TodoItemContainer extends Component {
    render () {
        return (
            <div>
                <ListView todoList={this.props.todos} addTodo={this.props.addTodo}/>
            </div>
        )
    }
}

const mapStateToProps = ({todo: { todos }}) => {
    return { 
        todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo: actions.addTodo
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoItemContainer)