import React, { Component } from 'react'
import { connect } from 'react-redux'


class HabitsDetails extends Component {
  render() {
    if (this.props.currentHabit !== {}) {
      return (
        <div className="HabitsList">
          <h3 className="text-center">{this.props.currentHabit.name}</h3>
          <h4 className="text-center">{this.props.currentHabit.details}</h4>
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
