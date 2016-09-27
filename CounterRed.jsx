import React from 'react'
import {ADDREDFUNC} from './actions/actions'

var CounterRed =  React.createClass({
	IncrementRed :function(){
		this.props.dispatch(ADDREDFUNC())
	},
	render(){
	return(
		<div>
		<input type="button" onClick={this.IncrementRed} value="RedAdd"/>
		<label>{this.props.value}</label>
		</div>
	)
	}
})

export default CounterRed;