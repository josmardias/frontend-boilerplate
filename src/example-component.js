const React = require('react');

class Example extends React.Component {
  render () {
    return <div>Hello {this.props.name}</div>;
  }
}

module.exports = Example;
