import { Card, Grid, Icon } from 'semantic-ui-react'

import AddForm from '../AddForm/AddForm'
import CompletedTodos from '../CompletedTodos/CompletedTodos'
import TodoItem from '../TodoItem/TodoItem'

export default ({ todoList, completedTodos, addTodo, removeTodo, removeCompletedTodo, addCompletedTodo }) => {
    return (
        <div className='list-view'>
            <Card>
                <Grid padded>
                    <Grid.Row>
                        <Grid.Column>
                            <Icon name='tasks' size='large' style={{display: 'inline', marginRight: '20px'}}/>
                            <h2 style={{display: 'inline'}}>todospajsdlkfj</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <AddForm todoList={todoList} addTodo={addTodo} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <TodoItem 
                                todoList={todoList}
                                completedTodos={completedTodos}
                                addCompletedTodo={addCompletedTodo}
                                removeTodo={removeTodo}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            {
                                completedTodos.length !== 0 &&
                                <div>
                                    <h3>Completed!</h3>
                                    <CompletedTodos
                                        completedTodos={completedTodos}
                                        removeCompletedTodo={removeCompletedTodo} 
                                    />
                                </div>
                            }
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