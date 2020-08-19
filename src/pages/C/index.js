import React from 'react'
import { connect } from 'react-redux'

class C extends React.Component {

    kk =() => {
        this.props.sendAction()
    }
    render() {
        return (
            <button onClick={this.kk}>-</button>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
                type: 'kk'
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(C)