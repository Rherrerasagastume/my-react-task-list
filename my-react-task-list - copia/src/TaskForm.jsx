// TaskForm.jsx
import React from "react";
import Modal from "react-modal";

// Establece el elemento principal de la aplicación para react-modal
Modal.setAppElement("#root");

const TaskForm = ({ isOpen, onRequestClose, onSubmit, name, description, setName, setDescription }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Gestionar tareas"
      className="modal-dialog"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Agregar tarea</h5>
          <button type="button" className="close" onClick={onRequestClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="taskName">Nombre:</label>
              <input
                type="text"
                id="taskName"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="taskDescription">Descripción:</label>
              <textarea
                id="taskDescription"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Agregar tarea</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default TaskForm;
