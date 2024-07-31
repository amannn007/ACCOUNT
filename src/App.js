import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import { UserProvider } from './context/UserContext';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <UserProvider>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Login />} /> {/* Default route */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
