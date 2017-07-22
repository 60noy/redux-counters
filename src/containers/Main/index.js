import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { addCounter, removeCounter, incrementCounter, decrementCounter } from '../../actions/index'
import Counter from '../../components/Counter'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }
  // cleans the input field and calls addCounter action
  onAddCounter = () => {
    const { input } = this.state
    this.props.addCounter(input)
    this.setState({ input: '' })
  }
  // sets the input value in the state
  handleTextChange = (e) => {
    this.setState({ input: e.target.value })
  }
  render() {
    console.log(`state ${JSON.stringify(this.props)}`)
    return (
      <div style={{ marginLeft: '50%' }}>
        <button type="button" onClick={this.onAddCounter}> add counter </button>
        <input type="text" value={this.state.input} onChange={this.handleTextChange} placeholder="name the counter" />
        {this.props.counters.length > 0 && this.props.counters.map((counter, index) =>
          (<Counter
            key={counter.title}
            title={counter.title}
            value={counter.value}
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
  counters: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired).isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
