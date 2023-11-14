import './index.css'
import LoginAdmin from './pages/login/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/admin/dashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAdmin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App
