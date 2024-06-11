// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Todos from './todo';
import Recover from './components/RecoverPassword';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<Todos />} />
        <Route path="/recover-password" element={<Recover />} />

      </Routes>
    </Router>
  );
};

export default App;
