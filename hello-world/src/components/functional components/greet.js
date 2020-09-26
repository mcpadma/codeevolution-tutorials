import React from "react";

// function Greet() {
//   return (
//     <div>
//       <h1>Welcome to react</h1>
//     </div>
//   );
// }
// destructuring props in function parameters
// const Greet = ({name, rank}) => {
const Greet = props => {
  const {name, rank} = props;
  return (
    <div>
      {/* <h1>
        Welcome to {props.name}, {props.rank}
      </h1> */}
      {/* using destructured parameters without props keyword */}
      <h1>
        Welcome to {name}, {rank}
      </h1>
      {/* {props.children} */}
    </div>
  );
};
export default Greet;
