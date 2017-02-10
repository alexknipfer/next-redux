import { Component } from 'react'
import { List } from 'semantic-ui-react'

export default class extends Component {

    removeItem = (id) => {
        console.log(this.id)
    }

    render () {
        return (
            <div>
                <h2>TodoItem</h2>
                <List divided relaxed>
                    {
                        this.props.todoList.map((item, id) => {
                            //console.log(id)
                            return (
                                <List.Item key={id}>
                                    <List.Icon name='close' onClick={this.removeItem} link />
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