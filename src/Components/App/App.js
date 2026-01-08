import Subtitle from '../Subtitle/Subtitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import './App.css';
import TaskFinder from '../TaskFinder/TaskFinder';
import TaskContainer from '../TaskContainer/TaskContainer';
import TaskCreated from '../TaskCreated/TaskCreated';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButton';

function App() {
  return (
    <div className='ToDoContainer'>
      <h1>ToDo List</h1>
      <Subtitle inicio={1}/>
      <ProgressBar />
      <TaskFinder />
      <TaskContainer>
        <TaskCreated />
        <TaskCreated />
        <TaskCreated />
        <TaskCreated />
        <TaskCreated />
      </TaskContainer>
      <CreateTaskButton/>
    </div>
  )
}

export default App;
