export const API = 'GET_API'

export function setUser(user){
	return (
	{
		type : API,
		payLoad : {
			username: user.username,
			password: user.password
		}	
	})

}