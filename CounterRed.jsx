import React from 'react'
import {ADDREDFUNC} from './actions/actions'

var CounterRed =  React.createClass({
	IncrementRed :function(){
		this.props.dispatch(ADDREDFUNC())
	},
	render(){
	return(
		<div>
		<input type="button"  className="redAdd" value="RedAdd" onClick={this.IncrementRed}/>
				<div className="redCount">
				<div >{this.props.value}</div >
				<label className="redNotes">Value is maintained in client side</label>
				</div>
				</div>
	)
	}
})

export default CounterRed;