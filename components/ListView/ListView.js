import AddForm from '../AddForm/AddForm'
import { Card, Icon, Grid } from 'semantic-ui-react'
import TodoItem from '../TodoItem/TodoItem'

export default ({ todoList, addTodo, removeTodo }) => {
    return (
        <div className='list-view'>
            <Card>
                <Grid padded>
                    <Grid.Row>
                        <Grid.Column>
                            <Icon name='tasks' size='large' style={{display: 'inline', marginRight: '20px'}}/>
                            <h2 style={{display: 'inline'}}>My Todos</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <AddForm todoList={todoList} addTodo={addTodo} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <TodoItem todoList={todoList} removeTodo={removeTodo} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Card>
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