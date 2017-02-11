import { Button, Form } from 'semantic-ui-react'

import { Component } from 'react'

export default class extends Component {

    addItem = (e) => {
        e.preventDefault()
        const itemToAdd = document.getElementById('itemName').value
        const itemDescription = document.getElementById('itemDescription').value
        this.props.addTodo(itemToAdd, itemDescription)
    }

    render () {
        return (
            <Form onSubmit={this.addItem}>
                <Form.Field>
                    <input type='text' placeholder='Item to add' name="item" id='itemName' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Item description' name="itemDescription" id='itemDescription' />
                </Form.Field>
                <Button type='submit'>Add Item</Button>
            </Form>
        )
    }
}