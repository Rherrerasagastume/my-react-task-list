import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import classNames from "classnames";

const Task = (props) => {
  const [checked, setChecked] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(props.name);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    props.isUpdated(editedName);
  };

  return (
    <>
      <div
        className="row row-cols-auto align-items-center justify-content-between border rounded mb-3 p-2"
        style={{ backgroundColor: "#EDF2EF" }}
      >
        <div className="row row-cols-auto">
          <input
            type="radio"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
              props.isChecked(!checked);
            }}
          />
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          ) : (
            <label
              htmlFor={props.name}
              className={classNames({ "text-decoration-line-through": checked })}
            >
              {props.name}
            </label>
          )}
        </div>
        <div>
          <button className="btn" onClick={isEditing ? handleSave : handleEdit}>
            {isEditing ? "Save" : <FaEdit color="blue" />}
          </button>
          <button
            className="btn"
            onClick={() => props.isDeleted(props.id)}
          >
            <FaTrash color="red" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
