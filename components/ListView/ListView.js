import AddForm from '../AddForm/AddForm'
import { Grid } from 'semantic-ui-react'
import TodoItem from '../TodoItem/TodoItem'

export default ({todoList, addTodo}) => {
    return (
        <div className='list-view'>
            <Grid padded>
                <Grid.Row>
                    <Grid.Column>
                        <h2>List View</h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <AddForm todoList={todoList} addTodo={addTodo} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <TodoItem todoList={todoList} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <style jsx>{`
                .list-view {
                    margin-top: 80px;
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </div>
    )
}