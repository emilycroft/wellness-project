import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateCurrentHabit } from '../actions'

class HabitsThumbnail extends Component {
  handleClick(x) {
    this.props.updateCurrentHabit(this.props.habits[x])
  }

  handleMouseOver() {

  }

  render() {
    return (
      <div className="HabitsThumbnail">
        <div className="col-lg-3 col-md-4 col-xs-6 thumb" >
            <a className="thumbnail" onClick={this.handleClick.bind(this, 0)}>
            <img className="img-responsive" src="images/apple.jpg" alt="Healthy Eating"/>
                <h4 className="text-center">Healthy Eating</h4>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this, 1)} >
                <img onMouseOver={this.handleMouseOver.bind(this)} className="img-responsive" src="images/running.jpg" alt="Exercise"/>
                <h4 className="text-center">Exercise</h4>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this, 2)}>
                <img className="img-responsive" src="images/stress.jpg" alt="Stress"/>
                <h4 className="text-center">Stress</h4>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this, 3)}>
                <img className="img-responsive" src="images/sleep.jpg" alt="Sleep"/>
                <h4 className="text-center">Sleep</h4>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this, 4)}>
                <img className="img-responsive" src="images/resilience.jpg" alt="Resilience"/>
                <h4 className="text-center">Resilience</h4>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this, 5)}>
                <img className="img-responsive" src="images/cigarette.jpg" alt="Stop Smoking"/>
                <h4 className="text-center">Stop Smoking</h4>
            </a>
        </div>
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <a className="thumbnail" onClick={this.handleClick.bind(this, 6)}>
                <img className="img-responsive" src="images/money.jpg" alt="Financial Skills"/>
                <h4 className="text-center">Financial Skills</h4>
            </a>
        </div>
      </div>
    )
  }
}

// style={{backgroundImage: `url(${this.props.currentPark.image_url})`, backgroundSize: '100% 100%'}}
function mapStateToProps(state) {
  return {
    habits: state.habits,
    currentHabit: state.currentHabit
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateCurrentHabit}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitsThumbnail)
