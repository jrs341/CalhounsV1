import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Main from './Main'

storiesOf('Components/Main', module)
  .add('with text', () => (
    <Main onClick={action('clicked')}>Hello Main</Main>
  ))
  .add('with some emoji', () => (
    <Main onClick={action('clicked')}>hi</Main>
  ))
