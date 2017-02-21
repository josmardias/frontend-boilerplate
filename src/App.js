import React from 'react'
import UITheme from './ui'
import Form from './ui/form'

const App = () => (
  <UITheme>
    <Page1 />
  </UITheme>
)

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

const Page1 = () => (
  <div>
    <h1>Test</h1>
    <Form
      model={model}
      success="Login"
      cancel="Cancel"
    />
  </div>
)

export default App
