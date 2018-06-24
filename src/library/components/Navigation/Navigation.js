import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import navItems from '../../../../config/navItems'

export default class Navigation extends Component {
  static propTypes = {
    links: PropTypes.array
  }

  render () {
    const { active } = this.props
    return (
      <span className={'ura-navigation'}>
        { this.renderLinks(navItems, active)}
      </span>
    )
  }
  renderLinks (navItems, active) {
    if (!navItems) return null
    return navItems.map((link, i) =>
      <NavLink to={ link.slug }
        key={ i }
        activeClassName={'ura-navigation__item ura-navigation__item--active'}
        className={'ura-navigation__item'}>
        { link.label }
      </NavLink>)
  }
}