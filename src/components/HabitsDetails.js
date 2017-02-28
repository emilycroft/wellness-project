import React, { Component } from 'react'
import { connect } from 'react-redux'


class HabitsDetails extends Component {
  render() {
    if (this.props.currentDetails === "") {
      return (
        <div className="HabitsList">

        </div>
      )
      } else {
        return <div></div>
      }
  }
}

function mapStateToProps(state) {
  return {
    currentDetails: state.currentDetails
  }
}

export default connect(mapStateToProps)(HabitsDetails)
