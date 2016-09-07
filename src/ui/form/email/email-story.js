import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Email from '.'

storiesOf('ui.Form.Email', module)
  .add('Default', () => (
    <Email />
  ))
