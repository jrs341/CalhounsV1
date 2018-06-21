import React from 'react'
import {expect} from 'chai'
import Component from './Section'

describe('<Section />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Component />)
  })
  it('renders without exploding', () => {
    expect(wrapper).to.have.lengthOf(1)
  })
})
