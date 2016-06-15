import React from 'react'

class Example extends React.Component {

  render() {
    const props = this.props
    return <div>Hello {props.name}!</div>
  }

}

Example.propTypes = {
  name: React.PropTypes.string,
}

export default Example
