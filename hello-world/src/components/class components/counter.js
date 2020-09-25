import React, { Component } from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  incrementOne() {

    // don't directly update the state value instead use setstate
    // this.state.count = this.state.count +1;

    // Below code works fine for incrementing count value but console prints less than ui value
    // that's because react make's asyn call
    // this.setState({
    //     count:this.state.count + 1
    // })
    // console.log(this.state.count);
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );

    // code for using previous state for calculating new state
    this.setState((prevState) => ({
        count: prevState.count + 1
    }),()=>{console.log(this.state.count);})
    
    // we can also have props has second parameter if new state depends on props value
    // this.setState((prevState, props) => ({
    //     count: prevState.count + props.name
    // }),()=>{console.log(this.state.count);})

  }
  incrementFive() {
    this.incrementOne()
    this.incrementOne()
    this.incrementOne()
    this.incrementOne()
    this.incrementOne()
  }
  render() {
    return (
      <div>
        {/* Do's and Dont's of setState */}
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
