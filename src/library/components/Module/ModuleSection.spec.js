import React from 'react'
import {expect} from 'chai'

import Component from './ModuleSection'

import Module from './Module'

describe('(component) <ModuleSection />', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper).to.have.lengthOf(1)
  })
  describe('modules', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(
        <Component>
          <Module />
          <div>invalid</div>
          <Module />
        </Component>
      )
    })
    it('only consumes modules', () => {
      expect(wrapper.state().modules).to.be.lengthOf(2)
    })
    it('wraps modules with grid', () => {
      expect(wrapper.find('Row')).to.be.lengthOf(1)
      expect(wrapper.find('Column')).to.be.lengthOf(2)
    })
  })
})
