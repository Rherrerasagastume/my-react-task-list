import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import classNames from "classnames";

const Task = ({ id, name, isChecked, isDeleted, isUpdated }) => {
  const [checked, setChecked] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    isUpdated(id, editedName);
  };

  return (
    <>
      <div className="row row-cols-auto align-items-center justify-content-between border rounded mb-3 p-2" style={{ backgroundColor: "#EDF2EF" }}>
        <div className="row row-cols-auto">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
              isChecked(!checked);
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
              htmlFor={name}
              className={classNames({ "text-decoration-line-through": checked })}
            >
              {name}
            </label>
          )}
        </div>
        <div>
          <button className="btn" onClick={isEditing ? handleSave : handleEdit}>
            {isEditing ? "Save" : <FaEdit color="blue" />}
          </button>
          <button className="btn" onClick={() => isDeleted(id)}>
            <FaTrash color="red" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
