import Subtitle from "../Subtitle/Subtitle";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./App.css";
import TaskFinder from "../TaskFinder/TaskFinder";
import TaskContainer from "../TaskContainer/TaskContainer";
import TaskCreated from "../TaskCreated/TaskCreated";
import CreateTaskButton from "../CreateTaskButton/CreateTaskButton";
import React from "react";

const tasks = [
  { id: 1, taskName: "tender la cama", status: true },
  { id: 2, taskName: "lavar ropa", status: false },
  { id: 3, taskName: "bañarse", status: true },
  { id: 4, taskName: "limpiar arenero", status: false },
  { id: 5, taskName: "ir al gym", status: true },
];

function App() {
  const [state, setState] = React.useState(tasks);

  const tooglecheck = (id) => {
    const newtask = state.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setState(newtask);
  };

  const deleteTask = (id) =>{
    const newTasks = state.filter(task => task.id!== id)
    setState(newTasks)
  }
  return (
    <div className="ToDoContainer">
      <h1>ToDo List ccceron</h1>
      <Subtitle inicio={1} />
      <ProgressBar />
      <TaskFinder />
      <TaskContainer>
        {state.map((task) => (
          <TaskCreated
            key={task.id}
            text={task.taskName}
            status={task.status}
            ontoogle={() => tooglecheck(task.id)}
            deleteTask={() => deleteTask(task.id)}
          />
        ))}
      </TaskContainer>
      <CreateTaskButton />
    </div>
  );
}

export default App;
