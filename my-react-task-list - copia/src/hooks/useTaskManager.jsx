import { useState, useEffect } from "react";

const useTaskManager = (initialList) => {
  const [list, setList] = useState(initialList);

  useEffect(() => {
    console.log("Updating Local Storage:", list);
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addTask = (name) => {
    if (name.trim() !== "") {
      const newTask = { name, completed: false };
      console.log("Adding Task:", newTask);
      setList((prevList) => [...prevList, newTask]);
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

  return { list, addTask, deleteTask, editTask };
};

export default useTaskManager;
