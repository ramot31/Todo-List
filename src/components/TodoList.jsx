import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <div>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
