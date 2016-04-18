import React from 'react'

const Example = (props) => (
  <div>Hello { props.name }</div>
)

Example.propTypes = {
  name: React.PropTypes.string,
}

export default Example
