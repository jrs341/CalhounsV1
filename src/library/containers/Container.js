import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import {ErrorBoundary} from 'library'

class Container extends Component {
  static propTypes = {
    // apollo setup without wrapping a component in that file
    // just returns the main function
    apollo: PropTypes.func,
    // a file that has 'mapStateToProps, mapDispatchToProps' exported in an
    // object without using connect
    redux: PropTypes.object,
    // what component should recieve all the props from container
    componentToWrap: PropTypes.func,
    // A boolean flag to pass react-router match etc into the component
    // to wrap
    router: PropTypes.bool,
  }
  render () {
    const { apollo, redux, componentToWrap, router } = this.props
    if (!componentToWrap) throw new Error(
      'Container did not get a valid component to wrap')
    // Chain component wrapping methods
    var Component = componentToWrap
    // If apollo passed, wrap the current component with apollo
    if (apollo) Component = this._makeApolloWrapper(apollo, Component)
    // If redux passed, wrap the current component with redux
    if (redux) Component = this._makeReduxWrapper(redux, Component)
    // If router exists as prop, wrap the current component with 'withRouter'
    // from react-router for access to route params etc.
    if (router) Component = withRouter(Component)

    // Pass only passed props
    var passedProps = Object.assign({},{...this.props})
    passedProps.apollo ? delete passedProps.apollo : null
    passedProps.redux ? delete passedProps.redux : null
    passedProps.componentToWrap ? delete passedProps.componentToWrap : null
    // Return wrapped component and pass props
    return (
      <ErrorBoundary
        hideOnError
      >
        <Component {...passedProps} />
      </ErrorBoundary>
    )
  }
  /** Wraps component with apollo */
  _makeApolloWrapper (apollo, Component) {
    return apollo(Component)
  }
  /** Wraps component with bound redux connect */
  _makeReduxWrapper (redux, Component) {
    return connect(
      redux.mapStateToProps, redux.mapDispatchToProps
    )(Component)
  }
}

export { Container }
export default Container
