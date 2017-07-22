import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const Counter = ({ onRemove, onIncrement, onDecrement, value, title }) => (
  <div>
    <div className={styles.title}>
      {title}
    </div>
    <div className={styles.widget}>
      <button className={styles.btn} type="button" onClick={onDecrement}> - </button>
      <div className={styles.number}>{value}</div>
      <button className={styles.btn} type="button" onClick={onIncrement}> + </button>
    </div>
    <button type="button" onClick={onRemove}> remove counter </button>
  </div>
  )

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  title: PropTypes.string,
}
Counter.defaultProps = {
  title: '',
}
export default Counter
