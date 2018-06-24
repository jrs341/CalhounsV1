import React, {
  Component, Children, Fragment, cloneElement, createElement
} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

// import {ErrorBoundary} from 'library'

class Module extends Component {
  static propTypes = {
    //children: PropTypes.node,
    component: PropTypes.func,
    componentProps: PropTypes.object,
  }
  render () {
    const {component, componentProps} = this.props
    if (!component) return null
    const Component = withRouter(component)
    return <Component {...componentProps} />
  }
  // renderChildren (children) {
  //   if (!children) return null
  //   return Children.map(children, (child) => {
  //     const cProps = child.props
  //     console.log({cProps})
  //     const nc = withRouter(child)
  //     return cloneElement(nc, cProps)
  //   })
  // }
}

export default Module
