import React from 'react'
import { expect } from 'chai'

import { Container } from '../Container'

class Fixture extends React.Component {
  render () {
  return (<div className={'test'}>hi</div>)
  }
}

describe('<Container />', () => {
  it('returns null if no component to wrap', () => {
  const wrapper = mount(<Container />)
  expect(wrapper.html()).to.be.equal(null)
  })
  it('returns a component if only component provided', () => {
  const wrapper = mount(<Container componentToWrap={Fixture} />)
  expect(wrapper.find('.test')).to.have.className('test')
  })
})
