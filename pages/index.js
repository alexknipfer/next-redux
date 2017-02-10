import LayoutContainer from '../containers/LayoutContainer'
import { Provider } from 'react-redux'
import TodoItemContainer from '../containers/TodoItemContainer'
import store from '../redux/store'

export default () => (
    <Provider store={store}>
        <LayoutContainer>
            <TodoItemContainer />
        </LayoutContainer>
    </Provider>
)