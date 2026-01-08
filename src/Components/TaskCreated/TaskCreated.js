import { CiCircleCheck } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const TaskCreated = () => {
    return (
    <div>
        <CiCircleCheck className="check-icon"/>
        <p className="task-name">Tarea 1</p>
        <RiDeleteBin6Line className="delete-icon"/>

    </div>
    )
}

export default TaskCreated