import React from 'react'

const style = {
  margin: '40px auto',
  maxWidth: '650px',
  lineHeight: '1.6',
  fontSize: '18px',
  color: '#444',
  padding: '0 10px',
}

const UITheme = (props) => (
  <div style={style}>
    {props.children}
  </div>
)

UITheme.propTypes = {
  children: React.PropTypes.element.isRequired,
}

export default UITheme
