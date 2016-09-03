import React from 'react'
import { storiesOf } from '@kadira/storybook'

import TextField from '.'

storiesOf('ui.Form.TextField', module)
  .add('Default', () => (
    <TextField label="Type here..." />
  ))
  .add('Secure', () => (
    <TextField label="Type secret..." secure />
  ))
