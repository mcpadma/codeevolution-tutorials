import React from "react";

// function Greet() {
//   return (
//     <div>
//       <h1>Welcome to react</h1>
//     </div>
//   );
// }
const Greet = props => {
  return (
    <div>
      <h1>
        Welcome to {props.name}, {props.rank}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
