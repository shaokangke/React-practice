import React from 'react'
import {connect} from 'react-redux'

class B extends React.Component{
    render(){
        const ll = this.props.count
        return (
            <div style={ll%2==0?{color:'purple'}:{color:'green'}}>{this.props.count}</div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return state
}

export default connect(mapStateToProps)(B)