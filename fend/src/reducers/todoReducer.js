import {
  TODO_ADD,
  TODO_DELETE,
  TODO_ERROR,
  TODO_GET,
  TODO_LOADING,
  TODO_UPDATE,
} from "../utils/actions";

export const todoReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case TODO_LOADING:
      console.log("in load");
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    
    case TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };

    case TODO_ADD:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: null,
        todos: [...state.todos, action.payload],
      };

    case TODO_GET:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: null,
        todos: action.payload       
      }

    case TODO_UPDATE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: null,
        todos: state.todos.map((todo, index) => {
          if (todo._id === action.payload._id) {
            console.log('1');
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };

    case TODO_DELETE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: null,
        todos: state.todos.filter(
          (todo, index) => todo._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
