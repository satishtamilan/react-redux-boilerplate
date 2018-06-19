import axios from 'axios'
export const API_REQUEST = 'GET_API_REQUEST'
export function getTransactions() {
	return function(dispatch) {
		debugger
		axios.get('http://demo6735142.mockable.io/getdata')
		.then((response) => {
			console.log(response);
			if(response.status == 200){
				dispatch({type: API_REQUEST, payload: response.data}) 
			}else{
				alert('error in fetching data')
			}
			
		})
		.catch((error) => {
			console.log(error);
			
		});
	}
}