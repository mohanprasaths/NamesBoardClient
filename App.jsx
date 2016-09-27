import React from 'react'
import ReactDOM from 'react-dom'
import CounterBlue from './CounterBlue.jsx'
import CounterRed from './CounterRed.jsx'
import PushButton from './PushButton.jsx'
import NamesBoard from './NamesBoard.jsx'
import { connect } from 'react-redux'
import {PUSHVALUE} from './actions/actions'


var App = React.createClass({

	render(){
	      const { dispatch, red , blue ,names} = this.props

		return (
			<div>
				<CounterBlue dispatch={dispatch} value={this.props.blue}/>
				<CounterRed dispatch={dispatch} value={this.props.red}/>
				<PushButton dispatch={dispatch} />
				<NamesBoard value={names} dispatch={dispatch}/>
			</div>
		)
	}
})

function select(state){
	return {
	   red : state.ADDR.red,
	   blue : state.ADDB.blue,
	   names : state.Names.names
	}
}

export default connect(select)(App);