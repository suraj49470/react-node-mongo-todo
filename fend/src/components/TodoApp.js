import { useContext, useEffect } from "react";
import { TodoContext } from "../App";
import TodoWrapperComponent from "./TodoWrapper.component";
import { TODO_GET, TODO_LOADING } from "../utils/actions";
import { fetchTodos } from "../api/todo.api";
import AddTodo from "./AddTodo.component";
import User from "./user.component";
import ListTodo from "./ListTodo.component";

const TodoApp = () => {
 const { todo , todo_dispatch } = useContext(TodoContext);
 
 console.log(todo);
 const getTodos = async () => {
  todo_dispatch({type:TODO_LOADING,payload:null});
  const response = await fetchTodos();
  todo_dispatch({type:TODO_GET,payload:response});
 }
 useEffect(() => {
  getTodos();
 },[]);

 return (
   <TodoWrapperComponent>
      {
        todo.isLoading && (<span className="ml-4 text-sm text-center">Loading...</span>)
      }
      {
        !todo.isLoading && todo.isError && (<span className="ml-4 text-sm text-center">{todo.error}</span>)
      }
      {
        todo.todos && todo.todos.length === 0 &&
        <>
        <User />
        <AddTodo />
        </>    
      }
      {
        todo.todos && todo.todos.length > 0 &&
        <>
        <User />
        <ListTodo todos={todo.todos}/>
        <AddTodo />
        </>    
      }
   </TodoWrapperComponent>
  
  )
};

export default TodoApp;
