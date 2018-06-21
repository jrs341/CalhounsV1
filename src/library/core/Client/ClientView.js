import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import './ClientView.sass'

// TODO: Rename all context to 'client' instead of app
// This will be a client composed of many apps

export class ClientView extends Component {
  static propTypes = {
    // whether a process is currently validating a token
    isValidatingToken: PropTypes.bool,
    // whether to load the rest of the app, default false
    load: PropTypes.bool,
    // whether user has been fully authenticated, default false
    isAuthenticated: PropTypes.bool,
    // action to get viewer info from token or take to login
    authenticateToken: PropTypes.func,
    // call to set 'load' as true in global state
    loadApp: PropTypes.func,
    // content wrapped by these JSX tags
    children: PropTypes.node,
    // viewer token
    token: PropTypes.string,
    // viewer info
    viewerId: PropTypes.number
  }

  componentWillMount () {
    // Check for a token because if one exists, we should validate
    // and login user. If not, leave it up to the routes to deny based on auth
    const {
      isAuthenticated,
      authenticateToken,
      loadApp,
      token,
    } = this.props

    // Run validation to get user info if storage token
    if (token && !isAuthenticated) {
      // if they dont match, clear and force login
      authenticateToken()
    } else {
      // load the rest of the app
      loadApp()
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isAuthenticated, load, loadApp, token } = nextProps
    // if criteria met except load, initiate enabling app load
    if (token && isAuthenticated && !load) {
      loadApp()
    }
  }

  render () {
    const { children, isValidatingToken, load } = this.props
    // If validating a token, dont load shit
    if (isValidatingToken || !load) {
      return null
    }
    return <div className='ura-client'>
      { children }
    </div>
  }
}

export default ClientView
