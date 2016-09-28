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
		<input type="button"  className="blueAdd" value="BlueAdd" onClick={this.IncrementBlue}/>
				<div className="blueCount">
				<div >{this.props.value}</div >
				<label className="blueNotes">Value from server</label>
				</div>
				</div>
	)
	}
})

export default CounterBlue;