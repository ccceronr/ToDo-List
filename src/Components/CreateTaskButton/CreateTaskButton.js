import { IoIosAddCircleOutline } from "react-icons/io";
import './CreateTaskButton.css';

const CreateTaskButton = () => {
    return(
        <button className="new-task-button">
            <IoIosAddCircleOutline className="new-task-icon" />
            <span className="button-text">Crear Tarea</span>
        </button>
    )
}

export default CreateTaskButton