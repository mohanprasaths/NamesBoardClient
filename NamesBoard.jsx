import React from 'react'
import {getNames} from './actions/actions'

var NamesBoard = React.createClass({
	componentWillMount(){
		this.props.dispatch(getNames())
	},
	render(){
	console.log(this.props.value)
	var data = this.props.value
	console.log("react data	"+data)
	return(
		<div>
		{data.map((name,index)=>  <Name value={name.name} key={index}/>)}
		</div>
	)
	}
})

var Name = React.createClass({
	render(){
	return(
		<label className="singleName"> {this.props.value}</label>
	)
	}
})

export default NamesBoard