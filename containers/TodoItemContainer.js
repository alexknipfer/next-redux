import { Component } from 'react'
import TodoItem from '../components/TodoItem/TodoItem'
import { actions } from '../redux/reducers/todo'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TodoItemContainer extends Component {
    render () {
        console.log(this.props.state)
        return (
            <TodoItem />
        )
    }
}

const mapStateToProps = (state) => {
    return state
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