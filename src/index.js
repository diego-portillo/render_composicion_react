import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/index.js';

// function App(props){
//     return(
//         <h1>s {props.saludo} e {props.name}  r</h1>
//     )
// }

// function withSaludo(saludo){
//     return function WrappedComponentWithSaludo(WrappedComponent){
//         return function ComponenteDeVerdad(props){
//             return (
//             <React.Fragment>
//                 <WrappedComponent {...props} saludo={saludo}/>
//                 <p>Estamos acompañando al WrappedComponent</p>
//             </React.Fragment>)
//         }
//     }
// }

// const AppWithSaludo = withSaludo('Wenas')(App);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
// root.render(<App saludo="Hola" name="juan"/>)
// root.render(<AppWithSaludo name="juan"/>)


