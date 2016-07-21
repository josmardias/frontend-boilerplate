import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Example from '.'

storiesOf('ui.Example', module)
  .add('With place attribute', () => (
    <Example place="world" />
  ))
  .add('With empty place attribute', () => (
    <Example />
  ))
