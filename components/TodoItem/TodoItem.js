import { Icon, List } from 'semantic-ui-react'

import { Component } from 'react'

export default class extends Component {
    
    completeItem = (item) => {
        this.props.addCompletedTodo(item)
        this.props.removeTodo(item.id)
    }

    render () {
        if(this.props.todoList.length === 0) {
            return <h3>You currently have no todos!</h3>
        }
        else {
            return (
                <div>
                    <List divided animated selection>
                        {
                            this.props.todoList.map((item, id) => {
                                return (
                                    <List.Item key={id}>
                                        <List.Content style={{float: 'left'}}>
                                            <List.Header>
                                                {item.itemName}
                                            </List.Header>
                                            <List.Description>
                                                {item.itemDescription}
                                            </List.Description>
                                        </List.Content>
                                        <div className='icons'>
                                            <Icon 
                                                name='checkmark' 
                                                onClick={() => this.completeItem(item)}
                                                link
                                            />
                                        </div>
                                        <style jsx>{`
                                            .icons {
                                                float: right;
                                                margin-top: 10px;   
                                            }
                                        `}</style>
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