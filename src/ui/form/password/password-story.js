import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Password from '.'

storiesOf('ui.Form.Password', module)
  .add('Default', () => (
    <Password />
  ))
