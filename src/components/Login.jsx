import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email] = useState("");

  const handleSubmit = (event) => {
    localStorage.setItem("userEmail", email);
    event.preventDefault();

    navigate("/../todo");
  };

  const handleRecoverPassword = () => {
    navigate("/recover-password");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button className="button-login" type="submit">
            Entrar
          </button>
        </form>
        <span className="span-recover" onClick={handleRecoverPassword}>
          Recuperar Senha
        </span>
        <span className="span-recover" onClick={handleRegister}>
          Registrar
        </span>
      </div>
    </div>
  );
};

export default Login;
