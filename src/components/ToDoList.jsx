import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <div className="todo-list">
      <h2>My Tasks</h2>

      {props.tasks.length === 0 ? (
        <p className="no-tasks">No tasks available.</p>
      ) : (
        props.tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleComplete={props.toggleComplete}
            deleteTask={props.deleteTask}
            editTask={props.editTask}
          />
        ))
      )}
    </div>
  );
}

export default ToDoList;