import { Dimmer, Menu } from 'semantic-ui-react'

export default ({ open, openDimmer, closeDimmer }) => (
    <div>
        <Menu pointing fixed='top'>
            <Menu.Item link>
                Home
            </Menu.Item>
            <Menu.Item link onClick={openDimmer}>
                Panel
            </Menu.Item>
        </Menu>
        <Dimmer active={open} />
    </div>
)