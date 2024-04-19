import React from "react";
import Todo from "./Todo.component";

const ListTodo = ({todos}) => {
    return todos.map((todo,index) => (<div key={index}><Todo  todos={todo}/></div>))
};

export default React.memo(ListTodo);