import {ADDRED,ADDBLUE,ADDJSONVALUE,ADDVALUE,UPDATENAMES} from '../actions/actions'
import { combineReducers } from 'redux'

function ADDR(state=[],action){
	switch(action.type){
		case ADDRED :console.log(action.countRed);return {
			red  : action.countRed
		}

		default : return state
	}
}
function ADDB(state=[],action){
	switch(action.type){
		case ADDBLUE :  console.log(action.countBlue);return {
			blue  : action.countBlue
		}
		case ADDJSONVALUE : console.log("inside")

		default : return state
	}
}
function Names(state=[],action){
	switch(action.type){
		case UPDATENAMES : console.log(action.data);return{
			names:action.data
		}
		default : return state
	}
}

const ADDAPP = combineReducers({
	ADDR,ADDB,Names
})

export default ADDAPP

