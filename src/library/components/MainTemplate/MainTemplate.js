import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Header,
  Static,
  Section,
  Main
} from 'library'


export default class MainTemplate extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const {children} = this.props
    return (
      <Static>
        <Section flow='column' flex={1}>
          <Container
            componentToWrap={Header}
            router
          />
          <Main className='ura-content'>
            {children}
          </Main>
        </Section>
      </Static>
    )
  }
}
