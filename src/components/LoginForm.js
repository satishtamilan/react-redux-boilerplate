import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Dispatch } from "redux";
import { bindActionCreators } from 'redux'
import { Control, Form, actions, Errors } from 'react-redux-form';
import '../assets/css/App.css'
import '../bootstrap/dist/css/bootstrap.min.css';


import { setUser, API } from '../actions/index'

const readInitState = (state, props) => {
    
    actions.merge('user', state.user)
    return {
      user: state.user
    }
}

const updateAppState = (dispatch) => {
    
    console.log(actions)


    return {
        onInit: (data) => {
            dispatch(setUser(data))
        } 
    } 
}

const postLogin = (values, contextVal) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
        reject({
          '': 'Login failed!',
          username: 'User does not exist',
        });
      } else if (values.password !== 'beatles') {
        reject({
          '': 'Login failed!',
          password: 'Wrong password',
        });
      } else {
        resolve(true);
        contextVal.props.history.push("/Forms")
        console.log(values);
      }
    });
  });
}


class LoginForm extends Component {

  constructor(props) {
    super(props)
  }
    
  handleSubmit(values) {
    var self = this;
    this.props.dispatch(actions.submit('user', postLogin(values, self)));
  }
  render() {
    return (
     <Form className=" container bg-white m-t-5per col-md-6" model="user" onSubmit={values => this.handleSubmit(values)}>
        <Errors className="errors" model="user" />
        <p>
          Username is <strong>john</strong>, <strong>paul</strong>, <strong>george</strong>, or <strong>ringo</strong>.<br />
          Password is <strong>beatles</strong>.
        </p>
        
        <div className="field form-group col-md-12 p-l-0">
         
          <Control.text
            model=".username"
            className="form-control"
            required
            validateOn="blur"
			id="name"
          />
		   <label className="form-control-placeholder" for="name">Username</label>
          <Errors
            className="errors"
            model=".username"
            show="touched"
            messages={{
              valueMissing: 'Username is required',
              maxLength: 'Must be 15 characters or less'
            }}
          />
        </div>
        
        <div className="field form-group col-md-12 p-l-0">
          
          <Control
            type="password"
            model=".password"
			className="form-control"
            required
            validateOn="blur"
			id="password"
          />
		  <label className="form-control-placeholder" for="password">Password</label>
          <Errors
            className="errors"
            model=".password"
            show="touched"
            messages={{
              valueMissing: 'password is required',
              maxLength: 'Must be 15 characters or less'
            }}
          />
        </div>

        <button type="submit" className="login_button col-md-5">   Log In   </button>
        <Control.reset model="user" className="secondary login_button col-md-5">
          Clear Values
        </Control.reset>
      </Form>

    );
  }
}

function mapDispatchToProps(dispatch) {
  const boundActions = bindActionCreators({ setUser }, dispatch)
  return { ...boundActions, dispatch }
}

export default withRouter(connect(readInitState, mapDispatchToProps)(LoginForm))
