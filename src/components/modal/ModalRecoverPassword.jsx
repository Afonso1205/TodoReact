import { useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import '../../App.css';

const ModalRecoverPassword = ({ isOpen, onClose }) => {
  const [code, setCode] = useState(Array(6).fill(''));
  const navigate = useNavigate();


  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Código de recuperação:', code.join(''));
    navigate('/');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Recuperar Senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group-recover">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`digit-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="digit-input"
              />
            ))}
          </div>
          <button className="button-submit" type="submit">Enviar</button>
          <button className="button-close" onClick={onClose}>Fechar</button>
        </form>
      </div>
    </div>
  );
};

ModalRecoverPassword.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalRecoverPassword;
