import './TaskFinder.css';

const TaskFinder = () => {
    return(
        <div className ="task-finder-container">
            <input
                className="task-finder-input"
                type="text"
                placeholder="Buscar tarea..."
            />
        </div>

    )
}

export default TaskFinder;