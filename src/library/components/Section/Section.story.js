import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Section from './Section'

storiesOf('Components/Section', module)
  .add('with text', () => (
    <Section onClick={action('clicked')}>Hello Section</Section>
  ))
  .add('with some emoji', () => (
    <Section onClick={action('clicked')}>hi</Section>
  ))
