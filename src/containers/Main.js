import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { addCounter, removeCounter, incrementCounter, decrementCounter } from '../actions/index'
import Counter from './Counter'

class Main extends Component {
  render() {
    console.log(`state ${JSON.stringify(this.props)}`)
    return (
      <div style={{ marginLeft: '50%' }}>
        <button type="button" onClick={this.props.addCounter}> add counter </button>
        {this.props.counters.length > 0 && this.props.counters.map((counter, index) =>
          (<Counter
            number={counter}
            onRemove={() => this.props.removeCounter(index)}
            onIncrement={() => this.props.incrementCounter(index)}
            onDecrement={() => this.props.decrementCounter(index)}
          />))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counters: state.counters,
})

const mapDispatchToProps = dispatch =>
bindActionCreators({ addCounter, removeCounter, incrementCounter, decrementCounter }, dispatch)

Main.propTypes = {
  addCounter: PropTypes.func.isRequired,
  removeCounter: PropTypes.func.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  counters: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
