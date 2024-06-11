import  { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import ModalRecoverPassword from './modal/ModalRecoverPassword';

const Recover = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/recover-password');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Recuperar senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <button className="button-recover" type="submit">Recuperar Senha</button>
        </form>
      </div>
      <ModalRecoverPassword isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Recover;
