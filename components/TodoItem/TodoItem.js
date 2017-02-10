import { List } from 'semantic-ui-react'

export default ({ todoList }) => {
    return (
        <div>
            <h2>TodoItem</h2>
            <List divided relaxed>
                {
                    todoList.map((item, id) => {
                        return (
                            <List.Item key={id}>
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