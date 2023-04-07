import "./App.css";
import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";



//This is for practice......................

// function Calcutor() {
//   let [value, setValue] = React.useState(0);

//   console.log("component rendered")

//   React.useEffect(()=>{
//     console.log('Effect function ran');
//   }, [value])

//   function add() {
//     setValue(function (prevValue) {
//       return prevValue + 1;
//     });
//     console.log(value);
//   }
//   function minus() {
//     setValue((prevValue) => prevValue - 1);
//     console.log(value);
//   }

//   return (
//     <>
//       <button onClick={add}>+</button>
//       <button onClick={minus}>-</button>
//     </>
//   );
// }



function App() {
  return (
    <>
      <Header />
      <Meme />
      {/* <Calcutor /> */}
    </>
  );
}

export default App;
