import { useState } from "react";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import CategoryForm from "./components/CategoryForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
      completionDate: "2024-06-10",
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
      completionDate: "2024-06-09",
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
      completionDate: "2024-06-11",
    },
  ]);

  const [categories, setCategories] = useState([
    {
      id: 1,
      text: "Trabalho",
    },
    {
      id: 2,
      text: "Estudos",
    },
    {
      id: 3,
      text: "Pessoal",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [dateSort, setDateSort] = useState("None");

  const addTodo = (text, category, date) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
        completionDate: date,
      },
    ];

    setTodos(newTodos);
  };

  const addCategory = (text) => {
    const newCategories = [
      ...categories,
      {
        id: Math.floor(Math.random() * 1000),
        text,
      },
    ];

    setCategories(newCategories);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  const sortedTodos = todos
    .filter((todo) => {
      const isExpired =
        todo.completionDate && new Date(todo.completionDate) < new Date();
      return filter === "All"
        ? true
        : filter === "Completed"
        ? todo.isCompleted
        : filter === "Incomplete"
        ? !todo.isCompleted
        : filter === "Expired"
        ? isExpired && !todo.isCompleted
        : true;
    })
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (dateSort !== "None") {
        const dateA = a.completionDate ? new Date(a.completionDate) : new Date();
        const dateB = b.completionDate ? new Date(b.completionDate) : new Date();
        return dateSort === "Asc" ? dateA - dateB : dateB - dateA;
      }
      return sort === "Asc"
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text);
    });

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} setDateSort={setDateSort} />
      <div className="todo-list">
        {sortedTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} categories={categories} />
      <CategoryForm addCategory={addCategory} />
    </div>
  );
}

export default App;
