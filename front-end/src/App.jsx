import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<SignupForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/users' element={<UserList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
