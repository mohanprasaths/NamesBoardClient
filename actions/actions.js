import fetch from 'isomorphic-fetch'
//var URL = 'http://localhost:8081'
var URL = 'https://namesboardserver.herokuapp.com'

export  const ADDBLUE = "ADDBLUE"
export const ADDRED = "ADDRED"
export const UPDATENAMES = "UPDATENAMES"
var countRed = 1;
var countBlue = 1;

export function ADDREDFUNC(){
	return {
		type : ADDRED,
		countRed : countRed++
	}
}

export function ADDBLUEFUNC(){
	return {
		type : ADDBLUE,
		countBlue : countBlue++
	}
}

export function ADDJSONVALUE(json){
	console.log(json.kind)
	return {
		type : ADDBLUE,
		countBlue : json.status
	}
}

export function ADDVALUE(){
	return dispatch => {
		return fetch(URL+'/registeruser').then(response=>response.json()).then(json=>{console.log(json); return dispatch(ADDJSONVALUE(json))})
	}
}

export function updateNames(namesJson){
	console.log(namesJson)
	return {
		type : UPDATENAMES,
		data : namesJson.names
	}
}

export function getNames(){
	return dispatch => {
	return fetch(URL+'/getAllNames',{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json()).then(json=>dispatch(updateNames(json)))
}
}

export function PUSHVALUE(names){
		    let bodyStr = "name=" + encodeURIComponent(names);

		return dispatch => {
			return fetch(URL+'/getData', {  
 //pass cookies, for authentication
      method: 'POST',
      headers: {'Access-Control-Request-Headers': '*',
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: bodyStr
    }).then(response=>dispatch(getNames()))
	}
}

