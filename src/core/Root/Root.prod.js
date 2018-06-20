import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {
  BrowserRouter
} from 'react-router-dom'

// Redux stuff
import { Provider } from 'react-redux'

// apollo stuff
// import {
//   ApolloProvider
// } from 'react-apollo'

class RootProd extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    client: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }
  render () {
    const {store, client, routes} = this.props
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter children={ routes }/>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default RootProd
