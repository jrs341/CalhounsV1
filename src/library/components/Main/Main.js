import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Main extends Component {
  static propTypes = {
    flex: PropTypes.number,
    flow: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
  }
  render () {
    const {children, className, flow, flex, style} = this.props
    const classes = className ? className : ''
    const stylesheet = require('./Main.sass')
    var styles = {}
    if (flow) styles.flexFlow = flow
    if (flex) styles.flex = flex
    Object.assign(styles,style)
    return (
      <main className={`main ${classes}`} style={styles}>
        {children}
      </main>
    )
  }
}
