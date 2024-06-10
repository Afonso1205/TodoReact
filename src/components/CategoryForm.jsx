import { useState } from "react";

const CategoryForm = ({ addCategory }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addCategory(value);
    //limpar os campos
    setValue("");
  };

  return (
    <div className="category-form">
      <h2>Criar Categoria</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Criar Categoria</button>
      </form>
    </div>
  );
};

export default CategoryForm;
