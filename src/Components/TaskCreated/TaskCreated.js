import { CiCircleCheck } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import './TaskCreated.css';

const TaskCreated = ({text,status, ontoogle, deleteTask}) => {
    return (
    <div className={`task-created ${status ? "realized" : ""}`}>
        <CiCircleCheck className="check-icon" onClick={ontoogle} />
        <p className="task-name">{text}</p>
        <RiDeleteBin6Line className="delete-icon" onClick={deleteTask}/>
    </div>
    )
}

export default TaskCreated