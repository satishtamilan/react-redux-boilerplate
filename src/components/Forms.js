import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Dispatch } from "redux";
import { bindActionCreators } from 'redux'
import { Control, Form, actions, Errors } from 'react-redux-form';
import '../assets/css/App.css'
import '../bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Navigation from './Navigation'
import axios from 'axios'

import { getTransactions } from '../actions/serviceCallAction'

const postLogin = (values) => {
    debugger
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(values)
        })
    })
    
}

class Forms extends Component{
	constructor(props) {
	  super(props)
	  this.props.dispatch(getTransactions())
	}

    handleSubmit(values) {

        this.props.dispatch(actions.submit('formUser', postLogin(values)));
        
    }  

    componentWillReceiveProps(nextProps) {
              
  	}

	render(){

        var dropDownVal = [
            { value: 'USA', name: 'USA' },
            { value: 'CANADA', name: 'CANADA' }
        ];
		if(this.props.serviceVal != null){
			
			dropDownVal = this.props.serviceVal
		}
			return (
			<div className="container-fluid">
                <Header />
                <Navigation />
				
		<div className="container m-b-5per">
		
			<h1 className=" m-t-5per d-inflex">Core Fund Info</h1>
			<div className="pull-right m-t-5per">
			<button type="submit" className="login_button ">   SAVE & EXIT   </button>
        <Control.reset model="user" className="secondary login_button "> SEND FOR APPROVAL    </Control.reset>
			</div>
			<h5 className="m-t-4pec">Basic Info</h5>
			<div className="bg_white info_page">
				<Form model="formUser" onSubmit={values => this.handleSubmit(values)}>

<div className="row">
<div className="col-sm-8">
							<div className="form-group">
								<label>Fund Name:</label>
								<Control.text
									className="form-control"
									model=".user1"
									placeholder="Fund Name"
									required
									validateOn="blur"
								/>
								<Errors
									className="errors"
									model=".user1"
									show="touched"
									messages={{
									  valueMissing: 'Name is required',
									  maxLength: 'Must be 15 characters or less'
									}}
								/>
							</div>


</div>
<div className="col-sm-4">
							<div className="form-group">
								<label>Fund Number:</label>
								<Control.text
									className="form-control"
									model=".user10"
									placeholder="Fund Number"
									required
									validateOn="blur"
								/>
								<Errors
									className="errors"
									model=".user10"
									show="touched"
									messages={{
									  valueMissing: 'Fund Number is required',
									  maxLength: 'Must be 15 characters or less'
									}}
								/>
							</div>

							</div>
</div>

<div className="row">
<div className="col-sm-4">
<div className="form-group">
										<label>CRS Number:</label>
										<Control.text
											className="form-control"
											model=".user2"
											placeholder="CRS Number"
											required
											validateOn="blur"
										/>
										<Errors
											className="errors"
											model=".user2"
											show="touched"
											messages={{
											  valueMissing: 'CRS Number is required',
											  maxLength: 'Must be 15 characters or less'
											}}
										/>
									</div>
</div>

<div className="col-sm-4">
<div className="form-group">
								<label>Exchanging Grouping/WHEM:</label>
								

                                            <Control.select
                                                model=".user11"
                                                className="form-control"
                                                required
                                                validateOn="blur">

                                                {dropDownVal.map((e, key) => {
                                                    return <option key={key} value={e.value}>{e.name}</option>
                                                })}
                                            </Control.select>
                                            <Errors
                                                className="errors"
                                                model=".user11"
                                                show="touched"
                                                messages={{
                                                    valueMissing: 'Select value is required',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />

								

								 
							</div>
</div>

<div className="col-sm-4">

<div className="form-group">
										<label>Custody Number:</label>
										<Control.text
											className="form-control"
											model=".user4"
											placeholder="Custody Number"
											required
											validateOn="blur"
										/>
										<Errors
											className="errors"
											model=".user4"
											show="touched"
											messages={{
											  valueMissing: 'Custody Number is required',
											  maxLength: 'Must be 15 characters or less'
											}}
										/>
									</div>

</div>

</div>
<div className="row">
<div className="col-sm-4">
<div className="form-group row">
<div className="col-sm-8">
										<label>GIO Number:</label>
										<Control.text
											className="form-control"
											model=".user5"
											placeholder="GIO Number"
											required
											validateOn="blur"
										/>
										<Errors
											className="errors"
											model=".user5"
											show="touched"
											messages={{
											  valueMissing: 'GIO Number is required',
											  maxLength: 'Must be 15 characters or less'
											}}
										/>
</div>
<div className="top40px" >
<div className="form-check">
									<input type="radio" name="email" className="form-check-input"
									placeholder="Email address"  value="option2" />
									<label className="form-check-label">Mark as Dummy </label>
								</div> </div>

									</div> 	
								


</div>


<div className="col-sm-4">
<div className="form-group">
									    <label>ISIN</label>
										<Control.text
											className="form-control"
											model=".user6"
											placeholder="ISIN"
											required
											validateOn="blur"
										/>
										<Errors
											className="errors"
											model=".user6"
											show="touched"
											messages={{
											  valueMissing: 'ISIN is required',
											  maxLength: 'Must be 15 characters or less'
											}}
										/>
									</div>
</div>


<div className="col-sm-4">
<div className="form-group">
										<label>CD Code:</label>
										<Control.text
											className="form-control"
											model=".user7"
											placeholder="CD Code"
											required
											validateOn="blur"
										/>
										<Errors
											className="errors"
											model=".user7"
											show="touched"
											messages={{
											  valueMissing: 'CD Code is required',
											  maxLength: 'Must be 15 characters or less'
											}}
										/>
									</div>
</div>



</div>

<div className="row">
<div className="col-sm-4">
<div className="form-group">
								<label>External Identifiers(CUSIP,ISN):</label>
								<Control.text
									className="form-control"
									model=".user12"
									placeholder="External Identifiers(CUSIP,ISN)"
									required
									validateOn="blur"
								/>
								<Errors
									className="errors"
									model=".user12"
									show="touched"
									messages={{
									  valueMissing: 'External Identifiers(CUSIP,ISN) is required',
									  maxLength: 'Must be 15 characters or less'
									}}
								/>
							</div>
</div>
<div className="col-sm-4">
<div className="form-group">
										<label>TPA Number:</label>
										<Control.text
											className="form-control"
											model=".user8"
											placeholder="TPA Number"
											required
											validateOn="blur"
										/>
										<Errors
											className="errors"
											model=".user8"
											show="touched"
											messages={{
											  valueMissing: 'TPA Number is required',
											  maxLength: 'Must be 15 characters or less'
											}}
										/>
									</div>
</div>
<div className="col-sm-4">
<div className="form-group">
										<label>Downstream Application IDs:</label>
										<Control.text
											className="form-control"
											model=".user9"
											placeholder="Downstream Application IDs"
											required
											validateOn="blur"
										/>
										<Errors
											className="errors"
											model=".user9"
											show="touched"
											messages={{
											  valueMissing: 'Downstream Application IDs is required',
											  maxLength: 'Must be 15 characters or less'
											}}
										/>
									</div>
</div>

</div>

<div className="row togglecolor">
						<div className="col-sm-3">
        
						<div className="btn-group btn-toggle"> 
						<span className="p-r-10px">National Structure</span>
    <button className="btn btn-default">YES</button>
    <button className="btn btn-primary">NO</button>
  </div>
						</div>
						
						<div className="col-sm-3">
						<div className="btn-group btn-toggle"> 
						<span className="p-r-10px">Exemption from Taxes*</span>
    <button className="btn btn-default">YES</button>
    <button className="btn btn-primary">NO</button>
  </div>

						</div>
						
						<div className="col-sm-3">
						
						<div className="btn-group btn-toggle"> 
						<span className="p-r-10px">Payment Type*</span>
    <button className="btn btn-default">PARTIAL</button>
    <button className="btn btn-primary">FULL</button>
  </div>
						</div>
						
						<div className="col-sm-3">
						
						<div className="btn-group btn-toggle"> 
						<span className="p-r-10px">Closure Type*</span>
    <button className="btn btn-default">HARD</button>
    <button className="btn btn-primary">SOFT</button>
  </div>
						</div>
</div>



					<button type="submit" className="submit_button">    Submit     </button>
				</Form>
			</div>



			<h5 className="m-t-4pec">Type & Structure </h5>
			<div className="bg_white info_page">
				<Form model="formUser" onSubmit={values => this.handleSubmit(values)}>

				<div className="row">
<div className="col-sm-6">
						<div className="form-group">
						<label>Fund Type:</label>
						<Control.select 
						model=".user11"
						className="form-control"
						required
						validateOn = "blur">
							<option value=""></option>
							<option value="ff0000">Default select 1</option>
							<option value="00ff00">Default select 2</option>
							<option value="0000ff">Default select 3</option>
						</Control.select>
						<Errors
							className="errors"
							model=".user11"
							show="touched"
							messages={{
							valueMissing: 'Select value is required',
							maxLength: 'Must be 15 characters or less'
							}}
						/>
						</div>


</div>
<div className="col-sm-6">
							<div className="form-group">
							<label>Fund Options:</label>
							<Control.select 
							model=".user11"
							className="form-control"
							required
							validateOn = "blur">
								<option value=""></option>
								<option value="ff0000">Default select 1</option>
								<option value="00ff00">Default select 2</option>
								<option value="0000ff">Default select 3</option>
							</Control.select>
							<Errors
								className="errors"
								model=".user11"
								show="touched"
								messages={{
								valueMissing: 'Select value is required',
								maxLength: 'Must be 15 characters or less'
								}}
							/>
							</div>

							</div>
</div>


				</Form>
			</div>



		</div>
		</div>
	)	
	}  
} 

function mapStateToProps( state ) {
  return {
    serviceVal : state.service.apiData
  }
}

function mapDispatchToProps(dispatch) {
  const boundActions = bindActionCreators({ getTransactions }, dispatch)
  return { ...boundActions, dispatch }
}
export default connect(mapStateToProps, mapDispatchToProps)(Forms)