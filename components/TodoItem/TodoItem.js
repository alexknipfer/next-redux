import { Component } from 'react'
import { List } from 'semantic-ui-react'

export default class extends Component {

    removeItem = (itemId) => {
        this.props.removeTodo(itemId)
    }

    render () {
        if(this.props.todoList.length === 0) {
            return <h3>You currently have no todos!</h3>
        }
        else {
            return (
                <div>
                    <List divided relaxed>
                        {
                            this.props.todoList.map((item, id) => {
                                return (
                                    <List.Item key={id}>
                                        <List.Icon name='close' onClick={() => this.removeItem(item.id)} link />
                                        <List.Content>
                                            <List.Header>
                                                {item.itemName}
                                            </List.Header>
                                            <List.Description>
                                                {item.itemDescription}
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                )
                            })
                        }
                    </List>
                </div>
            )
        }
    }
}