import React, { Component } from 'react';
import HabitsThumbnail from './HabitsThumbnail'

class HabitsList extends Component {
  render() {
    return (
      <div className="HabitsList">
        <div className="row">

            <HabitsThumbnail />

        </div>
      </div>
    );
  }
}

export default HabitsList;
