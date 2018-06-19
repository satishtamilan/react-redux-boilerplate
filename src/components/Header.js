import '../assets/css/App.css';
import '../bootstrap/dist/css/bootstrap.min.css';
import '../bootstrap/dist/css/custom.css';
import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import { Dispatch } from "redux";


class Header extends Component{

	render(){
		return(
		<div class="mainheader">
			<div className="container">
				<div className="logo_left">
					<p><img src ="https://dummyimage.com/60x40/000/fff"  className="logo_left_img"/>
						<span className="firstlogo"> NORTHERN TRUST</span></p>
				</div>
				<div className="logo_right">
					<p>Welcome john<span><img src ="https://dummyimage.com/60x40/000/fff"  className="logo_right_img"/></span></p>
				</div>
			</div>
			<div className="clearfix"></div>
			<div className="container-fluid bg_green">
				<div className="container">
					<div className="jumbotron bg-info">
						<h1 className="display-3">New Fund: Northern Trust Government  </h1>
						<h1 className="display-3">Bond Index Fund  </h1>
					</div>
			</div>
			</div>
		</div>
	)
	}
}

export default Header