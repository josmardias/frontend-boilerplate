import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
  display: 'flex',
  height: 100,
  width: 100,
  alignItems: 'center',
  justifyContent: 'center',
}

const Example = (props) => (
  <Paper style={style} zDepth={5}>
    Hello {props.place}!
  </Paper>
)

Example.propTypes = {
  place: React.PropTypes.string,
}

export default Example
