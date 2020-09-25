import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Greet from "./components/functional components/greet";
import Welcome from "./components/class components/welcome";
import Message from "./components/class components/message";
import Counter from "./components/class components/counter";

// function App() {
//   return (
//     <div className="App">
//     <Message />
//       {/* <Greet name="react" rank="1">
//         <p>This is children props</p>
//       </Greet>
//       <Greet name="angular" rank="2">
//         <button>Action</button>
//       </Greet>

//       <Welcome name="react" rank="1"/>
//       <Welcome name="angular" rank="2"/> */}
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return(
      <div className="App">
      <Message />
      <Counter />
      </div>
    )
  }
}

export default App;
