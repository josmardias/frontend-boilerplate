/* eslint-disable global-require */
import { configure, addDecorator } from '@kadira/storybook'
import React from 'react'
import UITheme from '../../src/ui'

const loadStories = () => {
  require('../../src/ui/form/text-field/text-field-story')
}

addDecorator(story => (
  <UITheme>
    {story()}
  </UITheme>
))

configure(loadStories, module)
