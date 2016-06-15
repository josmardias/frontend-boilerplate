import React from 'react'

const Example = (props) => (
  <div>Hello {props.place}!</div>
)

Example.propTypes = {
  place: React.PropTypes.string,
}

export default Example
