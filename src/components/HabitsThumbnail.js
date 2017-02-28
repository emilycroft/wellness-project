import React, { Component } from 'react';
import HabitsDetails from './HabitsDetails'

class HabitsThumbnail extends Component {
  handleClick() {
    return <HabitsDetails/>
  }

  render() {
    var habits = ["Healthy Eating", "Exercise", "Stress", "Resilience", "Sleep", "Stop Smoking", "Financial Skills"]
    return (
      <div className="HabitsThumbnail">

        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this)}>
                <img className="img-responsive" src="images/apple.jpg" alt="Healthy Eating"/>
                <h4 className="text-center">Healthy Eating</h4>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this)} >
                <img onmouseover="" className="img-responsive" src="images/yoga.jpg" alt="Exercise"/>
                <h4 className="text-center">Exercise</h4>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this)}>
                <img className="img-responsive" src="images/stress.jpg" alt="Stress"/>
                <h4 className="text-center">Stress</h4>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this)}>
                <img className="img-responsive" src="images/sleep.jpg" alt="Sleep"/>
                <h4 className="text-center">Sleep</h4>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this)}>
                <img className="img-responsive" src="images/resilience.jpg" alt="Resilience"/>
                <h4 className="text-center">Resilience</h4>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this)}>
                <img className="img-responsive" src="images/cigarette.jpg" alt="Stop Smoking"/>
                <h4 className="text-center">Stop Smoking</h4>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this)}>
                <img className="img-responsive" src="images/money.jpg" alt="Financial Skills"/>
                <h4 className="text-center">Financial Skills</h4>
            </a>
        </div>
      </div>
    );
  }
}

export default HabitsThumbnail;
