import { Button, Form } from 'semantic-ui-react'

export default () => (
    <Form>
        <Form.Field>
            <input type='text' placeholder='Item to add' name="item" id='itemName' />
        </Form.Field>
        <Form.Field>
            <input type='text' placeholder='Item description' name="itemDescription" id='itemDescription' />
        </Form.Field>
        <Button>Add Item</Button>
    </Form>
)