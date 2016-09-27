import React from 'react'
import {PUSHVALUE} from './actions/actions'

var PushButton = React.createClass({
	pushValue(){
		var name = this.refs.name.value;
		this.props.dispatch(PUSHVALUE(name))
	},
	render(){
		return(
				<div>
					<input type="button" value="pushValue" onClick={this.pushValue} />
					<input type="text" ref="name"/>
				</div>
			)
	}
})

export default PushButton