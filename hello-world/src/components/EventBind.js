import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello"
    };
    // suggested by react document
    // this.clickHandler = this.clickHandler.bind(this);
  }
//   clickHandler() {
//     this.setState({
//       message: "GoodBye"
//     });
//   }

// binding as class property 
clickHandler = () => {
    this.setState({
        message: "GoodBye"
    })
}

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        {/* <button onClick={this.clickHandler.bind(this)}>Click to Bind</button> */}
        {/* <button onClick={()=> this.clickHandler()}>Click to Bind</button> */}
        {/* <button onClick={this.clickHandler}>Click to Bind</button> */}
        <button onClick={this.clickHandler}>Click to Bind</button>
      </div>
    );
  }
}

export default EventBind;
