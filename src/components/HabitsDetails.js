import React, { Component } from 'react'
import { connect } from 'react-redux'


class HabitsDetails extends Component {
  render() {
    if (this.props.currentHabit !== {}) {
      return (
        <div className="HabitsList">
          <h1>{this.props.currentHabit.details}</h1>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    currentHabit: state.currentHabit
  }
}

export default connect(mapStateToProps)(HabitsDetails)
