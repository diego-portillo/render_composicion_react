import React from "react";
import { TodoProvider } from "../TodoContext";
import {AppUI} from './AppUI';
import './App.css';
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearcher } from "../ToDoSearcher";
import { ToDoItem } from "../ToDoItem";

// function App(){
//   const [ state, setState] = React.useState('estado compartido');
//   return(
    
//       <React.Fragment>
//         <TodoHeader>
//           <ToDoCounter/>
//           <ToDoSearcher/>
//         </TodoHeader>
//         <TodoList>
//           <ToDoItem state={state}/>
//         </TodoList>
//       </React.Fragment>
   
//   );
// }
// function TodoHeader({children}){
//   return(
//     <header>
//       {children}
//     </header>
//   );
// }
// function TodoList({children}){
//   return(
//     <section className="TodoList-container">
//       {children}
//     </section>
//   );
// }
// function ToDoCounter(){
//   // const [state, setState] = React.useContext(TodoProvider)
//   return <p>Contador</p>;
// }
// function ToDoSearcher(){
//   return <p>ToDoSearcher</p>;
// }
// function ToDoItem({state}){
//   return <p>ToDoItem: {state}</p>;
// }

function App() {

  return (
    <TodoProvider>
        <AppUI/>
    </TodoProvider>
  );
}

export default App;
