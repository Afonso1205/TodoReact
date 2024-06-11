import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [email] = useState("");

  const handleSubmit = (event) => {
    localStorage.setItem("userEmail", email);
    event.preventDefault();

    navigate("/../todo");
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Registrar</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Confirmar Email</label>
            <input
              type="confirmemail"
              id="confirmemail"
              name="confirmemail"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirmpassword">Confirmar Senha</label>
            <input
              type="confirmpassword"
              id="confirmpassword"
              name="confirmpassword"
              required
            />
          </div>
          <button className="button-login" type="submit">
            Registrar
          </button>
        </form>
        <span className="span-recover" onClick={handleLogin}>
          Já Possui Login
        </span>
      </div>
    </div>
  );
};

export default Register;
