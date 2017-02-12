import Layout from '../components/Layout/Layout'
import { Provider } from 'react-redux'
import TodoItemContainer from '../containers/TodoItemContainer'
import store from '../redux/store'

export default () => (
    <Provider store={store}>
        <Layout>
            <TodoItemContainer />
        </Layout>
    </Provider>
)