import React from 'react'
import TextFieldM from 'material-ui/TextField'

const TextField = ({
  label,
  secure = false,
}) => (
  <TextFieldM
    hintText={label}
    underlineShow
    type={secure ? 'password' : 'text'}
    fullWidth
  />
)

TextField.propTypes = {
  label: React.PropTypes.string.isRequired,
  secure: React.PropTypes.bool,
}

export default TextField
