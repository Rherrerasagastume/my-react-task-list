import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import className from "classname";

const Task = (props) => {
  const [checked, setChecked] = useState(false);

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
            name={props.name}
            onClick={() => {
              setChecked(!checked);
              props.isChecked(!checked);
            }}
          />
          <label
            htmlFor={props.name}
            className={className({ "text-decoration-line-through": checked })}
          >
            {props.name}
          </label>
        </div>
        <div>
          <button className="btn">
            <FaEdit color="blue" />
          </button>
          <button className="btn" onClick={() => props.isDeleted(props.id)}>
            <FaTrash color="red" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
