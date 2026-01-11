import './TaskFinder.css';

const TaskFinder = (props) => {

    return(
        <div className ="task-finder-container">
            <input
                className="task-finder-input"
                type="text"
                placeholder="Buscar tarea..."
                value={props.inputValue}
                onChange={(e)=>{props.setInputValue(e.target.value)}}
            />
        </div>

    )
}

export default TaskFinder;