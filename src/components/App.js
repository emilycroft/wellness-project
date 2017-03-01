import React, { Component } from 'react'
import HabitsList from './HabitsList'
import HabitsDetails from './HabitsDetails'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchHabits, updateCurrentHabit } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchHabits()
    this.props.updateCurrentHabit({})
  }

  render() {
    return (
      <div className="App">
          <HabitsList />
          <HabitsDetails />
          <hr/>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    habits: state.habits,
    currentHabit: state.currentHabit
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchHabits, updateCurrentHabit}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
