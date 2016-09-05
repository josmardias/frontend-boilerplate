import React from 'react'
import Lock from 'material-ui/svg-icons/action/lock'
import MenuItem from 'material-ui/MenuItem'

import TextField from '../text-field'

const Password = () => (
  <MenuItem
    leftIcon={<Lock />}
  >
    <TextField name="password" label="Password" secure />
  </MenuItem>

)

export default Password
