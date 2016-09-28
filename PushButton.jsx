import React from 'react'
import {PUSHVALUE} from './actions/actions'

var PushButton = React.createClass({
	pushValue(){
		var name = this.refs.name.value;
		this.refs.name.value = ""
		this.props.dispatch(PUSHVALUE(name))
	},
	render(){
		return(
				<div>
					<input type="button" className="pushButton" value="pushValue" onClick={this.pushValue} />
					<input type="text" className="pushValue" ref="name"/>
				</div>
			)
	}
})

export default PushButton