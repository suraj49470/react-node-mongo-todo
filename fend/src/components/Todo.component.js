import React, { useContext } from "react";
import { TodoContext } from "../App";
import { TODO_DELETE, TODO_UPDATE } from "../utils/actions";
import { deleteTodo, updateTodo } from "../api/todo.api";
const Todo = ({todos}) => {
    const { todo_dispatch } = useContext(TodoContext);
    const handleUpdateTodo = async (t) => {
        const temp = {...t,completed: !t.completed}
        const response = await updateTodo(temp);
        console.log(response);
        todo_dispatch({type:TODO_UPDATE,payload:t});
    }

    const handleDelete  = async (todo) => {
        const response = await deleteTodo(todo._id);
        console.log(response);
        todo_dispatch({type:TODO_DELETE,payload:todo})
    }
    return (
        <div className="flex items-center justify-between">
        <span>
            <input className="hidden" name={`task_${todos._id}`} onChange={(e) => {handleUpdateTodo(todos)}} type="checkbox" id={`task_${todos._id}`}  defaultChecked={todos.completed}/>
                <label className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" htmlFor={`task_${todos._id}`}>
                     <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-4 text-sm">{todos.title}</span>
                   
                    
                </label>
        </span>
        <span>
            <span className="flex items-end justify-end w-5 h-5 cursor-pointer hover:bg-gray-900" onClick={() => {handleDelete(todos)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                            <linearGradient id="nyvBozV7VK1PdF3LtMmOna_pre7LivdxKxJ_gr1" x1="18.405" x2="33.814" y1="10.91" y2="43.484" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#32bdef"></stop><stop offset="1" stopColor="#1ea2e4"></stop></linearGradient><path fill="url(#nyvBozV7VK1PdF3LtMmOna_pre7LivdxKxJ_gr1)" d="M39,10l-2.835,31.181C36.072,42.211,35.208,43,34.174,43H13.826	c-1.034,0-1.898-0.789-1.992-1.819L9,10H39z"></path><path fill="#0176d0" d="M32,7c0-1.105-0.895-2-2-2H18c-1.105,0-2,0.895-2,2c0,0,0,0.634,0,1h16C32,7.634,32,7,32,7z"></path><path fill="#007ad9" d="M7,9.886L7,9.886C7,9.363,7.358,8.912,7.868,8.8C10.173,8.293,16.763,7,24,7s13.827,1.293,16.132,1.8	C40.642,8.912,41,9.363,41,9.886v0C41,10.501,40.501,11,39.886,11H8.114C7.499,11,7,10.501,7,9.886z"></path>
                            </svg>
                </span>
        </span>
        </div>
    )
}

export default React.memo(Todo);