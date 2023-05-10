import React from "react";
import { useTodos } from "./useTodos";
import './App.css';
import { ToDoCounter } from '../ToDoCounter'
import { ToDoSearcher } from "../ToDoSearcher";
import { TodoHeader } from "../TodoHeader";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodosError } from "../TodosError";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";

function App() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo, 
    openModal, 
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo
  }= useTodos()

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <ToDoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos}
        />
        <ToDoSearcher 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        /> 
      </TodoHeader>
      <ToDoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={()=><TodosError/>}
        onLoading={()=><TodosLoading/>}
        onEmptyTodos={()=><EmptyTodos/>}
        onEmptySearchResults={(searchText)=> <p>No hay resultados para {searchText}</p>}
        render={todo => (<ToDoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={()=> completeTodo(todo.text)}
          onDelete={()=> deleteTodo(todo.text)}
        />)}
      >
        {/* {todo => (<ToDoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={()=> completeTodo(todo.text)}
          onDelete={()=> deleteTodo(todo.text)}
        />)} */}
      </ToDoList>
      {/* <ToDoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}
        {searchedTodos.map(todo => (
        <ToDoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={()=> completeTodo(todo.text)}
          onDelete={()=> deleteTodo(todo.text)}
        />
        ))}
    </ToDoList> */}
   {!!openModal && (
     <Modal>
      <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
   </Modal>
   )}

  <CreateToDoButton
  setOpenModal={setOpenModal}/>
  <ChangeAlertWithStorageListener/>
</React.Fragment>
// <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         {props.saludo}
//         {props.children}
//       </a>
//     </header>
//   </div>
)
}

export default App;

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


