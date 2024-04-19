import React from "react";

const TodoWrapper = ({children}) => {
    return (
        <div className="flex items-center justify-center w-screen h-screen font-medium">
        <div className="flex flex-grow items-center justify-center bg-gray-900 h-full">
          <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
           {
            children
           }
          </div>
        </div>
      </div>
    )
}

export default React.memo(TodoWrapper);