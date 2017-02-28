import React, { Component } from 'react';

class HabitsThumbnail extends Component {
  render() {
    var habits = ["Healthy Eating", "Exercise", "Stress", "Resilience", "Sleep", "Stop Smoking", "Financial Skills"]
    return (
      <div className="HabitsThumbnail">
        <div className="col-lg-12 p-40">
            <h1 className="page-header">Wellness</h1>
        </div>

        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" href="#">
                <img className="img-responsive" src="images/apple.jpg" alt="Healthy Eating"/>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" href="#">
                <img onmouseover="" className="img-responsive" src="images/yoga.jpg" alt="Exercise"/>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" href="#">
                <img className="img-responsive" src="images/stress.jpg" alt="Stress"/>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" href="#">
                <img className="img-responsive" src="images/sleep.jpg" alt="Sleep"/>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" href="#">
                <img className="img-responsive" src="images/resilience.jpg" alt="Stress"/>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" href="#">
                <img className="img-responsive" src="images/cigarette.jpg" alt="Stop Smoking"/>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" href="#">
                <img className="img-responsive" src="images/money.jpg" alt="Financial Skills"/>
            </a>
        </div>
      </div>
    );
  }
}

export default HabitsThumbnail;
