import React, { useState } from 'react';

function TodoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (newText.trim() !== '') {
      editTask(task.id, newText);
    }
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit} // Sauvegarde quand on quitte l'input
          onKeyDown={(e) => e.key === 'Enter' && handleEdit()} // Sauvegarde avec "Enter"
          autoFocus
        />
      ) : (
        <span
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.text}
        </span>
      )}

      <button onClick={() => deleteTask(task.id)}>Delete</button>

      {/* Si on est en mode édition, afficher "Save", sinon "Edit" */}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}

export default TodoItem;

