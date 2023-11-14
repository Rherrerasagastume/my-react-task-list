import { useState, useEffect } from "react";

const useTaskManager = () => {
  const staticList = [
    { name: "Buy a new gaming laptop", description: "Research the latest models.", complete: true },
    { name: "Complete a previous task", description: "Finish the report.", complete: false },
    { name: "Create a video for YouTube", description: "Plan and record a new video.", complete: false },
  ];

  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem("taskList");

    return storedList ? JSON.parse(storedList) : staticList;
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    saveListToLocalStorage();
  }, [list]);

  const addTask = () => {
    if (name && description) {
      const newTask = { name, description, complete: false };
      setList([...list, newTask]);
      setName("");
      setDescription("");
    }
  };

  const deleteTask = (taskId) => {
    setList(list.filter((_, index) => index !== taskId));
  };

  const editTask = (taskId, updatedTask) => {
    setList(list.map((task, index) => (index === taskId ? updatedTask : task)));
  };

  const saveListToLocalStorage = () => {
    try {
      localStorage.setItem("taskList", JSON.stringify(list));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  return {
    list,
    name,
    description,
    setName,
    setDescription,
    addTask,
    deleteTask,
    editTask,
  };
};

export default useTaskManager;
