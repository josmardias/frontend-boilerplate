const React = require('react');
const  ReactDOM = require('react-dom');
const Example = require('./example-component.js');

ReactDOM.render(
  <Example name="World" />,
  document.getElementById('container')
);
