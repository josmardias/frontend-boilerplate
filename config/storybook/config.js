/* eslint-disable global-require */
import { configure, addDecorator } from '@kadira/storybook'
import React from 'react'
import UITheme from '../../src/ui'

const loadStories = () => {
  require('../../src/ui/form/text-field/text-field-story')
  require('../../src/ui/form/email/email-story')
  require('../../src/ui/form/password/password-story')
  require('../../src/ui/form/checkbox/checkbox-story')
  require('../../src/ui/form/button/button-story')
}

addDecorator(story => (
  <UITheme>
    {story()}
  </UITheme>
))

configure(loadStories, module)
