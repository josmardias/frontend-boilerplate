import React from 'react'

import Button from './button'
import Checkbox from './checkbox'
import Email from './email'
import Password from './password'
import TextField from './text-field'

const fieldTypes = {
  checkbox: Checkbox,
  email: Email,
  password: Password,
  text: TextField,
}

const FormFieldWrapper = ({ style = {}, children, ...props } = {}) => (
  <div style={style} {...props}>{children}</div>
)

const getField = (name, { type = 'text', label, value }) => {
  const Field = fieldTypes[type] || fieldTypes.text
  const style = {}
  if (Field === fieldTypes.checkbox) {
    style.marginLeft = 17
    style.marginTop = 10
  }
  return (
    <FormFieldWrapper
      key={name}
      style={style}
    >
      {Field === fieldTypes.checkbox ?
        <Field
          key={name}
          label={label || name}
          checked={!!value}
        /> :
        <Field
          key={name}
          label={value}
        />
      }
    </FormFieldWrapper>
  )
}

const styles = {
  actionButtons: {
    marginTop: 20,
    marginRight: 15,
    float: 'right',
  },
  cancelButton: {
    marginRight: 10,
  },
}

const Form = ({ model = {}, success = 'Submit', cancel } = {}) => {
  const toComponent = (fieldName) => {
    const field = model[fieldName]
    return getField(fieldName, field)
  }

  return (
    <div>
      {Object.keys(model).map(toComponent)}
      <div style={styles.actionButtons}>
        {cancel ?
          <span style={styles.cancelButton}>
            <Button label={cancel} />
          </span> :
          undefined
        }
        <Button label={success} primary />
      </div>
    </div>
  )
}

Form.propTypes = {
  model: React.PropTypes.objectOf(
    React.PropTypes.shape({
      type: React.PropTypes.string,
      label: React.PropTypes.string,
      value: React.PropTypes.any,
    })
  ),
  success: React.PropTypes.string,
  cancel: React.PropTypes.string,
}

export default Form
