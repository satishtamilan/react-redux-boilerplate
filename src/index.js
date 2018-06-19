import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import Forms from './components/Forms'

// We'll create this in step 3.
import configureStore from './store1'


//const store = createStore(rootReducer)
const store = configureStore()



render(
 
  <Provider store={store}>
  	<Router>	
 
  	<div>
	  	<Route exact path="/" component={App} />
	  	<Route path="/Forms" component={Forms} />
	  	
  	</div>

  </Router>
  </Provider>,
  document.getElementById('root') 
)
