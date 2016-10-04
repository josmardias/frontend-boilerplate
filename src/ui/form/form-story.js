import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Form from '.'

storiesOf('ui.Form', module)
  .add('With default values', () => {
    const model = {
      email: {
        type: 'email',
        value: 'test"test.com',
      },
      password: {
        type: 'password',
      },
      remember: {
        type: 'checkbox',
        label: 'Remember',
        value: true,
      },
      forget: {
        type: 'checkbox',
        label: 'Forget',
      },
    }

    return (
      <Form
        model={model}
        success="Login"
        cancel="Cancel"
      />
    )
  })
  .add('Without cancel button', () => {
    const model = {
      email: {
        type: 'email',
      },
    }

    return (
      <Form
        model={model}
      />
    )
  })
