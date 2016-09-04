import React from 'react'
import CheckboxM from 'material-ui/Checkbox'

const iconStyle = {
  marginRight: 30,
}

const Checkbox = ({
  label,
  checked = false,
}) => (
  <CheckboxM
    label={label}
    defaultChecked={checked}
    iconStyle={iconStyle}
  />
)

Checkbox.propTypes = {
  label: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool,
}

export default Checkbox
