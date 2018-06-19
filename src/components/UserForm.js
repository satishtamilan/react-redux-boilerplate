import React, { Component } from 'react';
import { Control, Form, actions, Errors } from 'react-redux-form';
import '../assets/css/App.css'
import axios from 'axios'

const isEmail = (val) => val && val.length > 5;
const isName = (val) => val && val.length > 0;
class UserForm extends Component{

	

	handleSubmit(user) {
	  // Do whatever you like in here.
	  // If you connect the UserForm to the Redux store,
	  // you can dispatch actions such as:
	  // dispatch(actions.submit('user', somePromise));
	  // etc.
	  debugger
	  console.log(user)

	  axios.get('http://demo6735142.mockable.io/getfund')
		  .then((response) => {
		    console.log(response);
		    alert(response.data.msg)
		  })
		  .catch((error) => {
		    console.log(error);
		    alert(error)
		  });
	}

	render(){
		return(
			
			<div className="container">
				<div className="bg_white">
					<Form
						model="user"
						onSubmit={this.handleSubmit}
					>
						<div className="row">
							<div className="col-sm-7">
								<div className="form-group">
									<label htmlFor="user.firstName">First name:</label>
									<Control.text 
									model="user.firstName" 
									id="user.firstName"
									errors={{
									    required: (val) => !val || !val.length,
									    isEmail: (val) => !isEmail(val),
									  }} />

									<Errors
							            wrapper="span"
							            show={{ touched: true, focus: false }}
							            model="user.firstName"
							            messages={{
							              isRequired: 'Please provide a first name.',
							            }}
							          />  
				
								</div>

								<div className="row">
									<div className="col-sm-6">
										<div className="form-group">
											<label htmlFor="user.lastName">Last name:</label>
											<Control.text 
											model="user.lastName" 
											id="user.lastName"
											errors={{
											    required: (val) => !val || !val.length,
											    isName: (val) => !isName(val),
											  }}  />
				
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-group">
											<button type="submit">
												Finish registration!
											</button>
										</div>
									</div>
								</div>
								
							</div>	
									
						</div>
							 	
						
					</Form>
				</div>
			</div>
		)
	}
}

export default UserForm