import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RootDev from './Root.dev'
import RootProd from './Root.prod'

// import '../../App.sass'

class Root extends Component {
  static propTypes = {
    // env: PropTypes.string.isRequired,
    // client: PropTypes.object.isRequired,
    // routes: PropTypes.object.isRequired,
    // store: PropTypes.object.isRequired,
  }
  render () {
    const { env } = this.props
    const RootComponent = (env === 'production') ? RootProd : RootDev
    return (
      <RootComponent {...this.props} />
    )
  }
}

export default Root
