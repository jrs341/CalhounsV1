import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Module from './Module'

storiesOf('Components/Module', module)
  .add('with text', () => (
    <Module onClick={action('clicked')}>Hello Module</Module>
  ))
  .add('with some emoji', () => (
    <Module onClick={action('clicked')}>hi</Module>
  ))
