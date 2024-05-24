import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Logo from './logo.js';
import LoginForm from './loginform';
import './Login_Cadastro.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Navbar1 from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar1/>

      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<LoginForm />} />
        <Route path='/inicial' element={<Home />} />

      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
