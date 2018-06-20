import React from 'react'
import {expect} from 'chai'
import {mount}from 'enzyme'

import Component from './PlaceHolder'

describe('<PlaceHolder />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Component children={[]} />)
  })
  it('component mounts', () => {
    wrapper = mount(<Component children={[]} />)
  })
  it('renders without exploding', () => {
    expect(wrapper).to.have.lengthOf(1)
  })
})
