import { createStore, applyMiddleware} from 'redux';
import { combineForms, createForms} from 'react-redux-form';
import { hashHistory, browserHistory } from 'react-router' // browserHistory
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
/*const thunk = ReduxThunk.default;
const logger = reduxLogger();*/

import reducers from './reducers'

const initialUserState = {
  username: '',
  password: ''
};
 

export const store = createStore(combineForms({
  user: initialUserState,
}), applyMiddleware(thunk, routerMiddleware(browserHistory)));
// If you want your entire store to have the form state...
/*const store = createStore(combineForms({
  user: initialUserState,
}));*/



/*const middleWares = applyMiddleware(
  thunk,
  routerMiddleware(hashHistory),
)

export const store = createStore(
  reducers,
  combineForms({user: initialUserState,}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleWares,
)*/

//export const history = syncHistoryWithStore(hashHistory, store)


//export default store;