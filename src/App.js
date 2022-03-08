import React, { useState } from 'react'
function App(){
  let [ counter, changeCounter ] = useState(1)
  window.changeCounter = changeCounter
return(
  <div> 
  <h1> {counter}</h1>
  <h4> {counter}</h4>
  <button onClick={()=> changeCounter(Math.floor(Math.random()* 100))}>Click me</button>
 </div>
)
}
export default App;















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Here WE Come REACT
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
