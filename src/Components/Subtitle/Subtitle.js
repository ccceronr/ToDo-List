import React from 'react';
import './Subtitle.css';

const Subtitle = (props) => {
    if (props.inicio === 1) {
    return <h2 className="subtitle">Comienza a agregar tareas</h2>
    }
    else{
    return <h2 className="subtitle">No es el inicio</h2>
    }
}

export default Subtitle;