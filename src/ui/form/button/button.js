import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const Button = ({
  label,
  primary = false,
}) => {
  if (!primary) {
    return (
      <FlatButton
        label={label}
      />
    )
  }

  return (
    <RaisedButton
      label={label}
      primary
    />
  )
}

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  primary: React.PropTypes.bool,
}

export default Button
