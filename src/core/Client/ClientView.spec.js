import React from 'react'

import Input from './Input'

describe('components', () => describe('ClientView', () => {
  describe('<ClientView />', () => {
    let wrapper
    let props

    beforeEach(() => {
      props = {
      }
      wrapper = shallow(<Input />)
    })

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render correctly', () => {
      expect(wrapper).toHaveLength(1)
    })
  })
}))
