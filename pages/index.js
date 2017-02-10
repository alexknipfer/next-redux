import LayoutContainer from '../containers/LayoutContainer'
import { Provider } from 'react-redux'
import store from '../redux/store'

export default () => (
    <Provider store={store}>
        <LayoutContainer />
    </Provider>
)