import { useState } from "react";

const TodoForm = ({ addTodo, categories }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category || !date) return;
    addTodo(value, category, date);
    // Limpar os campos
    setValue("");
    setCategory("");
    setDate("");
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.text}>
              {cat.text}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
