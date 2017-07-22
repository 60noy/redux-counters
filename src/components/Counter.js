import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from 'Counter.css'

class Counter extends Component {
  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: this.props.bgColor }}>
          <button type="button" onClick={this.props.onDecrement}> - </button>
          <div style={{ fontSize: '2em' }}>{this.props.number}</div>
          <button type="button" onClick={this.props.onIncrement}> + </button>
        </div>
        <button type="button" onClick={this.props.onRemove}> remove counter </button>
      </div>
    )
  }
}


Counter.propTypes = {
  number: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
}
export default Counter
