import React, { useContext, useRef } from "react";
import { TodoContext } from "../App";
import { TODO_ADD, TODO_LOADING } from "../utils/actions";
import { addTodo } from "../api/todo.api";

const AddTodo = () => {
    const inputRef = useRef(null);
    const { todo_dispatch } = useContext(TodoContext);
    const handleAddTodo = async () => {
        if(inputRef.current.value !== ''){
            const title = inputRef.current.value;
            const response = await addTodo(title);
            todo_dispatch({type:TODO_LOADING});
            inputRef.current.value = '';
            todo_dispatch({type:TODO_ADD, payload:response});
            return;
        }
    }
    return (
        <button onClick={() => handleAddTodo()} className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
            <svg className="w-5 h-5 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <input ref={inputRef} className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" type="text" placeholder="add a new task" />
        </button>
    )
}

export default React.memo(AddTodo);