import { Component } from 'react'
import Layout from '../components/Layout/Layout'
import { actions } from '../redux/reducers/navigation'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class LayoutContainer extends Component {
    render () {
        const { open , openDimmer, closeDimmer } = this.props
        return (
            <Layout open={open} openDimmer={openDimmer} closeDimmer={closeDimmer}>
                {this.props.children}
            </Layout>
        )
    }
}

const mapStateToProps = ({navigation: { open }}) => {
    return {
        open: open
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