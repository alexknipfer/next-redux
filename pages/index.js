import LayoutContainer from '../containers/LayoutContainer'
import ListView from '../components/ListView/ListView'
import { Provider } from 'react-redux'
import TodoItemContainer from '../containers/TodoItemContainer'
import store from '../redux/store'

export default () => (
    <Provider store={store}>
        <LayoutContainer>
            <ListView />
            <TodoItemContainer />
        </LayoutContainer>
    </Provider>
)