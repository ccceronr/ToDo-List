import "./TaskContainer.css";

const TaskContainer = (props) => {

  if (props.filteredTasks.length === 0) {
    return (
      <div className="task-container"><h2>No hay coincidencias</h2></div>
    );
  }

  return <div className="task-container">{props.children}</div>;
};

export default TaskContainer;
