import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Static from './Static'

storiesOf('Components/Static', module)
  .add('with text', () => (
    <Static onClick={action('clicked')}>Hello Static</Static>
  ))
  .add('with some emoji', () => (
    <Static onClick={action('clicked')}>hi</Static>
  ))
