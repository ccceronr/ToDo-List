import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <div className="super-container-bar">
      <div className="bar-container">
        <div className="progress-bar"></div>
      </div>
      <p className="progress-text">20% completado</p>
    </div>
  );
}

export default ProgressBar;
