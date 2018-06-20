import React, {Children, Component} from 'react'
import PropTypes from 'prop-types'

import {
  Row, Column
} from '../../'

/**
 * Used in pages with <Module> to unify the display of module areas.
 * It removes boilerplate and can be used to re-arrange module order
 * inside this wrapper.
 * Wraps all modules with <Row>, each module with <Column>
 * NOTE: This will provide a mechanism for dynamic layout
 * adjustments by the user
 */
class ModuleSection extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  constructor (props) {
    super (props)
    this.state = {
      // modules to be rendered out, provides opportunity to
      // manipulate children before rendering
      modules: []
    }
  }
  componentWillMount () {
    // update state with list of modules only from children
    this.consumeModules()
  }
  render () {
    return (
      <Row style={{marginRight:'-25px'}}>
        {this.renderModules()}
      </Row>
    )
  }
  /**
   * Scans children for <Module /> and stores them in state
   */
  consumeModules () {
    const {children} = this.props

    if (!children) return null
    // only get modules from children
    const modules = Children.toArray(children).filter(module => {
      return module.type.name === 'Module'
    })
    this.setState({
      modules: modules
    })
  }
  /**
   * Takes the modules saved in state and outputs them in render.
   * This allows for manipulation before rending
   */
  renderModules () {
    const {modules} = this.state
    return modules
      // NOTE: Example sorting
      // .sort((a,b) => {
      //   return a.props.order - b.props.order
      // })
      .map(module => {
        const props = module.props

        const cols = props && props.col || null

        return (
          <Column
            key={module.key}
            {...props}
          >{module}</Column>
        )
      })
  }
}

export default ModuleSection
