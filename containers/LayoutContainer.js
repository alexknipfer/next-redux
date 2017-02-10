import { Component } from 'react'
import Layout from '../components/Layout/Layout'
import { actions } from '../redux/reducers/navigation'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class LayoutContainer extends Component {
    render () {
        return (
            <Layout>
                {this.props.children}
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        openDimmer: actions.openDimmer,
        closeDimmer: actions.closeDimmer
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LayoutContainer)