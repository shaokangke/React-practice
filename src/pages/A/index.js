import React from 'react'
import {connect} from 'react-redux'

class A extends React.Component {

    plus =() => {
        console.log(this.props)
        this.props.sendAction()
    }
    render(){
        return(
            <div>
            <button onClick={this.plus}>+</button>
            </div>
        )
    }
}
const mapDispatchToProps =( dispatch) => {
    return {
        sendAction : ()=> {
            dispatch({
                type:'plus'
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(A)