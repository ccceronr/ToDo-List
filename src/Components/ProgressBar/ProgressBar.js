import "./ProgressBar.css";

const ProgressBar = ({ percent }) => {
  return (
    <div className="super-container-bar">
      <div className="bar-container">
        <div className="progress-bar" style={{ width: `${percent}%` }}></div>
      </div>
      <p className="progress-text">{percent}% completado</p>
    </div>
  );
}

export default ProgressBar;
