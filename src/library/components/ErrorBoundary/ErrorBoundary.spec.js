import React from 'react'
import {expect} from 'chai'
import {mount}from 'enzyme'

import Component from './ErrorBoundary'

describe('<ErrorBoundary />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Component />)
  })
  it('renders without exploding', () => {
    expect(wrapper).to.have.lengthOf(1)
  })
  // it('component mounts', () => {
  //   wrapper = mount(<Component />)
  // })
})
