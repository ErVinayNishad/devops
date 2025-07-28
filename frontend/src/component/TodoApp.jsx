import { useEffect, useState } from "react";
import { getTodo, addTodo, deleteTodo, updateTodo } from "../api/todoApi";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newToDoTitle, setToDoTitle] = useState("");
  useEffect(() => {
    fetchToDos();
  }, []);

  const fetchToDos = async () => {
    const res = await getTodo();
    setTodos(res.data);
  };

  const handleAddtodo = async () => {
    if (!newToDoTitle) return;
    await addTodo({ title: newToDoTitle });
    setToDoTitle("");
    fetchToDos();
  };
  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchToDos();
  };
  const handleUpdate = async (id) => {
    const updatedTitle = prompt("enter new title");
    if (updatedTitle) {
      await updateTodo(id, { title: updatedTitle });
      fetchToDos();
    }
  };
  return (
    <>
      <div>
        <h2>TODO APP</h2>
        <input
          type="text"
          value={newToDoTitle}
          onChange={(e) => setToDoTitle(e.target.value)}
          placeholder="Add new Todo"
        />
        <button onClick={handleAddtodo}>Add</button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>
              {todo.title}
              <button onClick={() => handleUpdate(todo._id)}>Edit</button>
              <button onClick={() => handleDelete(todo._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default TodoApp;
