// useTaskManager.jsx
import { useState, useEffect } from "react";

const useTaskManager = (initialList) => {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addTask = () => {
    if (name.trim().length >= 3) {
      const newTask = { name, description, completed: false };
      setList((prevList) => [...prevList, newTask]);
      setName("");
      setDescription("");
    } else {
      alert("El nombre de la tarea debe tener al menos 3 caracteres.");
    }
  };

  const deleteTask = (id) => {
    setList((prevList) => prevList.filter((_, i) => i !== id));
  };

  const editTask = (id, updatedTask) => {
    setList((prevList) =>
      prevList.map((el, i) => (i === id ? { ...el, ...updatedTask } : el))
    );
  };

  return { list, name, description, setName, setDescription, addTask, deleteTask, editTask };
};

export default useTaskManager;
