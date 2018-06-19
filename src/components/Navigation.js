import React from 'react'
import '../assets/css/App.css';
import '../bootstrap/dist/css/bootstrap.min.css';


const Navigation = () => {

	return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item activeItem">
								<a className="nav-link" href="#">Fund Info <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Share class</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Bank Data</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#"> Transaction Data</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#"> Instrument Type</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#"> Review</a>
							</li>

							
						</ul>
						
					</div>
				</div>
			</nav>
	  

	)
}

export default Navigation