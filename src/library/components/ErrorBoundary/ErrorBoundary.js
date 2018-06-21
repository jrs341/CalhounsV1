import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Catch errors in component pr for any sub rendered components. Can be nested
 * and will activate closest to where error occurred.
 *
 * Usage: Wrap a components render content with
 * <ErrorBoundary>Components components</ErrorBoundary>
 */
class ErrorBoundary extends Component {
  static propTypes = {
    // What to display to the user
    viewerMessage: PropTypes.string,
    // What to display to the console, will be appended with the error
    debugMessage: PropTypes.string,
    // Trigger global error display?
    errorContext: PropTypes.string,
    // Just hide on error? default false
    hideOnError: PropTypes.bool,
    // What component to render when error (optional)
    renderComponent: PropTypes.node,
  }

  static defaultProps = {
    usesErrorBoundary: true,
    hideOnError: false,
    viewerMessage: 'Oops, something went wrong here'
  }

  constructor () {
    super()
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    const { debugMessage } = this.props
    // Display fallback UI
    this.setState({ hasError: true })
    // You can also log the error to an error reporting service
    if (debugMessage) {
      console.warn(debugMessage, error)
    }
    //logErrorToMyService(error, info)
  }

  render () {
    const { children, hideOnError, renderComponent, viewerMessage } = this.props
    const { hasError } = this.state
    if (hasError) {
      if (hideOnError) return null
      // You can render any custom fallback UI
      if (renderComponent) {
        if(typeof renderComponent == 'object'){
          console.log('render comp', renderComponent)
          console.log(this.props)
          return renderComponent
        }
        const Component = renderComponent
        return (<Component {...this.props} />)
      } else {
        return <div>{viewerMessage}</div>
      }
    }
    return children
  }
}

export default ErrorBoundary
