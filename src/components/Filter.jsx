import React from "react";

const Filter = ({ filter, setFilter, setSort, setDateSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
            <option value="Expired">Atrasadas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button onClick={() => setSort("Asc")}>Asc</button>
          <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
        <div>
          <p>Data de conclusão:</p>
          <button onClick={() => setDateSort("Asc")}>Asc</button>
          <button onClick={() => setDateSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
