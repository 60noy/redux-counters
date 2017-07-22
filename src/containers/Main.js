import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { addOne, substractOne } from '../actions/index'

class Main extends Component {
  render() {
    return (
      <div>
        <div style={{ fontSize: '2em' }}>{this.props.number}</div>
        <button type="button" onClick={this.props.addOne}> + </button>
        <button type="button" onClick={this.props.substractOne}> - </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  number: state,
})

const mapDispatchToProps = dispatch => bindActionCreators({ addOne, substractOne }, dispatch)

Main.propTypes = {
  number: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  substractOne: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
