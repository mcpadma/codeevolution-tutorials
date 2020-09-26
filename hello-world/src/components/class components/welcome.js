import React from "react";

class Welcome extends React.Component {
  render() {
    //   destructuring props in class component should be done inside render()
    const { name, rank } = this.props;
    //   destructuring states is similar to destructuring of props both in class and function based components
    const { state1, state2 } = this.state;
    return (
      <div>
        <h1>
          Class component Welcome to {this.props.name}, {this.props.rank}
        </h1>
        {/* using destructured parameters without props keyword */}
        {/* <h1>
          Class component Welcome to {name}, {rank}
        </h1> */}
      </div>
    );
  }
}

export default Welcome;
