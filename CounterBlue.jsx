import React from 'react'
import {ADDBLUEFUNC,ADDJSONVALUE,ADDVALUE} from './actions/actions'


var CounterBlue =  React.createClass({
	IncrementBlue : function(){
		console.log("blue")
		this.props.dispatch(ADDVALUE())
				console.log("blueend")

	},
	render(){
	return(
	<div>
		<input type="button" value="BlueAdd" onClick={this.IncrementBlue}/>
				<label>{this.props.value}</label>
				</div>
	)
	}
})

export default CounterBlue;