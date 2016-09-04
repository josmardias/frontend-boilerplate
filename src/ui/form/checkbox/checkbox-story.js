import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Checkbox from '.'

storiesOf('ui.Form.Checkbox', module)
  .add('Default', () => (
    <Checkbox label="Check it!" />
  ))
