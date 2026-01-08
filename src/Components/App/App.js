import Subtitle from '../Subtitle/Subtitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import './App.css';
import TaskFinder from '../TaskFinder/TaskFinder';

function App() {
  return (
    <div className='ToDoContainer'>
      <h1>ToDo List</h1>
      <Subtitle inicio={1}/>
      <ProgressBar />
      <TaskFinder />
    </div>
  )
}

export default App;
