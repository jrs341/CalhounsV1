import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ErrorBoundary from './ErrorBoundary'

storiesOf('Components/ErrorBoundary', module)
  .add('with text', () => (
    <ErrorBoundary onClick={action('clicked')}>Hello ErrorBoundary
    </ErrorBoundary>
  ))
