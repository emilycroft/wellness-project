import React, { Component } from 'react';
import HabitsThumbnail from './HabitsThumbnail'

class HabitsList extends Component {
  render() {
    return (
      <div className="HabitsList">
        <div className="row">
          <div className="col-lg-12 p-40">
              <h1 className="page-header text">Health & Wellness</h1>
          </div>

          <HabitsThumbnail />

        </div>
      </div>
    )
  }
}

export default HabitsList
