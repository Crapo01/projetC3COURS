//import cours1
import logo from './logo.svg';
import logo2 from './logo2.svg';
//import cours2
import { useEffect,useState } from 'react';


import './App.css';


// // ######################################## composant simple en fonction
// const AppLink = () => {
//   let year = 2024;
//   return (
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React in {`year ${year}`}
//     </a>
//   )
// }

// // ################# composant simple en fonction avec parametres passés (props)
// const Logo = ({ svg }) => <img id="logoId" src={svg} className="App-logo" alt="logo" />

// // ######################################## composant simple en variable
// const AppParagraph = (
//   <p>
//     test de paragraphe
//   </p>
// )

// function App() {

//   const handleOnClick = (svg) => {
//     const logo = document.getElementById("logoId");
//     logo.src = svg

//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* injecte la fonction Logo en passant logo en props */}
//         <Logo svg={logo} />
//         <button onClick={() => handleOnClick(logo)}>BLUE</button>
//         <button onClick={() => handleOnClick(logo2)}>RED</button>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         {/* injecte la fonction AppLink */}
//         {<AppLink />}
//         {/* injecte la variable AppParagraph */}
//         {AppParagraph}
//         {/* injecte la fonction Logo en passant logo2 en props */}
//         <Logo svg={logo2} />
//       </header>
//     </div>
//   );
// }

const Result = ({result}) => <p className="result">You clicked {result} times total</p>

function Counter({count , increment}) {
  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => increment(count => count + 1) }>click</button>
    </div>
  )
}

function App() {

  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);
  const [result, setResult] = useState(0);

  useEffect (() => setResult(count1+count2),[count1, count2])
  // useeffect verifie: si il y a un changement dans le deuxieme param (count1 ou count2) il lance le CALLBACK setresult
  return (
    <div className="App">
      <header className="App-header">
        <h1 > Counter</h1>
        <Counter count={count1} increment={setCount1} />
        <Counter count={count2} increment={setCount2} />
        <Result result={result}/>
      </header>
    </div>
  );
}




export default App;
