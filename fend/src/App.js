import { createContext, useReducer } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";
import { initialState } from "./utils/todoInitialState";
import { todoReducer } from "./reducers/todoReducer";
import Test from "./components/test";

export const TodoContext = createContext();

function App() {
  const [ todo, todo_dispatch ] = useReducer(todoReducer,initialState.todoState);
  const [ profile, profile_dispatch ] = useReducer(todoReducer,initialState.profileState);
  const stateDispatchObject = { todo, todo_dispatch };
  return (
    <TodoContext.Provider value={stateDispatchObject}>
      
      <TodoApp />
    </TodoContext.Provider>
  );
}

export default App;
