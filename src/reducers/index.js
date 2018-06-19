import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from './userReducer'
import serviceReducer from './serviceReducer'
import { combineForms, createForms } from 'react-redux-form';

const initialUserState = {
  firstName: '',
  lastName: ''
};

const initForms ={
	user1: '',
	user2: '',
	user3: '',
	user4: '',
	user5: '',
	user6: '',
	user7: '',
	user8: '',
	user9: '',
	user10: '',
	user11: '',
	user12: ''

}

export default combineReducers({
  	user : userReducer,
  	service: serviceReducer,
  	...createForms({
    user: initialUserState,
    formUser: initForms,
  })
})