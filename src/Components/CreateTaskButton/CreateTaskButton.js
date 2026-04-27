import { IoIosAddCircleOutline } from "react-icons/io";
import './CreateTaskButton.css';

const CreateTaskButton = ({ onClick }) => {
    return(
        <button className="new-task-button" onClick={onClick}>
            <IoIosAddCircleOutline className="new-task-icon" />
            <span className="button-text">Crear Tarea</span>
        </button>
    )
}

export default CreateTaskButton