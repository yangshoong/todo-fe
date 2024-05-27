import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteTask, updateTask, getTasks }) => {
  const handleDelete = async (id) => {
    await deleteTask(id);
    await getTasks(); // 삭제 후 getTasks 함수 호출
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
          />
        ))
      ) : (
        <h2>There is no Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;