import{ API } from '../actions/index'

export default function(state = {username: '', password: ''}, action){
	switch(action.type){
		case API :
			const { username, password } = action.payLoad
			return{
				...state,
				username : username,
				password : password

			}
		default:
			return state;	
	}
} 
