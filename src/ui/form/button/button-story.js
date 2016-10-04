import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Button from '.'

storiesOf('ui.Form.Button', module)
  .add('Primary', () => (
    <Button label="Click me!" primary />
  ))
  .add('Secondary', () => (
    <Button label="Click me!" />
  ))
