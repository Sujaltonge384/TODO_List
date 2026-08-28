import { useState } from "react";

function ToDoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.task.text);

  const handleEdit = () => {
    if (editText.trim() === "") {
      return;
    }

    props.editTask(props.task.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={props.task.completed}
          onChange={() => props.toggleComplete(props.task.id)}
        />

        {isEditing ? (
          <input
            className="edit-input"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEdit();
              }
            }}
          />
        ) : (
          <span
            className={props.task.completed ? "completed" : ""}
          >
            {props.task.text}
          </span>
        )}
      </div>

      <div className="task-buttons">
        {isEditing ? (
          <button className="save-btn" onClick={handleEdit}>
            Save
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={() => {
              setEditText(props.task.text);
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() => props.deleteTask(props.task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;