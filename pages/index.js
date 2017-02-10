import LayoutContainer from '../containers/LayoutContainer'
import ListView from '../components/ListView/ListView'
import { Provider } from 'react-redux'
import store from '../redux/store'

export default () => (
    <Provider store={store}>
        <LayoutContainer>
            <ListView />
        </LayoutContainer>
    </Provider>
)