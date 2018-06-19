import{ API_REQUEST } from '../actions/serviceCallAction'


export default function (state = { apiData : null}, action){
	switch (action.type) {
		case API_REQUEST: {
			return {

				...state,
				apiData: action.payload,
			}
    	}

    	default:
    		return state
	}
}