import React from 'react';

export default class Bomb extends React.Component {

  // The initial value of secondsLeft is set by passing in an initialCount prop to the Bomb component.
  constructor(props){
    super(props)
    this.state = {

      // setting the initial state of the bomb: the amount of seconds left on the timer.
      secondsLeft: props.initialCount

    }
  }

  // create a component that represents a bomb timer that counts down until it reaches 0.
  render() {
    if (this.state.secondsLeft === 0) {
      return <h1>Boom!</h1>
    } else {
      return (
        <div>
        {this.state.secondsLeft} seconds left before I go boom!
        </div>
      )
    }
  }

}
