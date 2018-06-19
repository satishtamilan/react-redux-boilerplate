import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Form from './Forms'
import Header from './Header'
import Navigation from './Navigation'
import UserForm from './UserForm'
import LoginForm from './LoginForm'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Navigation />
                <LoginForm />
            </div>
        )
    }
}

export default connect()(App)