import { Icon, List } from 'semantic-ui-react'

import { Component } from 'react'

export default class extends Component {

    removeItem = (id) => {
        this.props.removeCompletedTodo(id)
    }

    render () {
        return (
            <List divided animated selection>
                {
                    this.props.completedTodos.map((item, index) => {
                        return (
                            <List.Item key={index}>
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
                                        name='close'
                                        onClick={() => this.removeItem(item.id)}
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
        )
    }
}