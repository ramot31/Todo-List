import React, { useState } from 'react';

function TodoItem({ task, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default TodoItem;
