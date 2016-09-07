import React from 'react'
import EmailIcon from 'material-ui/svg-icons/communication/email'
import MenuItem from 'material-ui/MenuItem'

import TextField from '../text-field'

const Email = () => (
  <MenuItem
    leftIcon={<EmailIcon />}
  >
    <TextField name="email" label="Email" />
  </MenuItem>

)

export default Email
