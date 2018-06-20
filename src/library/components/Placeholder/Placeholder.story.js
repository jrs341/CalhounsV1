import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Placeholder from './Placeholder'

storiesOf('Components/Placeholder', module)
  .add('with text', () => (
    <Placeholder onClick={action('clicked')}>Hello Placeholder
    </Placeholder>
  ))
  .add('with some emoji', () => (
    <Placeholder onClick={action('clicked')}>hi</Placeholder>
  ))
