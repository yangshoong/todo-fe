import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteTask, updateTask, getTasks }) => {
  const handleDelete = async (id) => {
    await deleteTask(id);
    await getTasks(); 
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((item) => (
          <TodoItem
            key={item._id}
            item={item}
            deleteTask={handleDelete}
            updateTask={updateTask}
            getTasks={getTasks}
          />
        ))
      ) : (
        <h2>There is no Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;