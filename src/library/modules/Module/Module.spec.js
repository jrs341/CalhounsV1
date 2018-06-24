import React from 'react'
import {expect} from 'chai'

import Component from './Module'

class TestComp extends React.Component {
  render () {
    return (
      <div className='testComp'>test</div>
    )
  }
}

describe('(component) <Module />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Component />)
  })
  it('renders without exploding', () => {
    const wrapper = mount(<Component />)
    expect(wrapper).to.have.lengthOf(1)
  })
  describe('rendering children', () => {
    let cWrapper
    beforeEach(() => {
      cWrapper = mount(
        <Component>
          <TestComp test='test' />
          <TestComp />
        </Component>
      )
    })
  })
})
