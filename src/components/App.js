import React, { Component } from 'react'
import HabitsList from './HabitsList'
import HabitsDetails from './HabitsDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
          <HabitsList />
          <HabitsDetails />
          <hr/>
      </div>

    );
  }
}

export default App;
