import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Section extends Component {
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
    const stylesheet = require('./Section.sass')
    var styles = {}
    if (flow) styles.flexFlow = flow
    if (flex) styles.flex = flex
    Object.assign(styles,style)
    return (
      <section className={`section ${classes}`} style={styles}>
        {children}
      </section>
    )
  }
}
