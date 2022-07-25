
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './pages/Shared/Navbar';
import ChangePassword from './pages/Home/ChangePassword';
import ManageProfile from './pages/Home/ManageProfile';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
        <Route path='manageprofile' element={<ManageProfile></ManageProfile>}></Route>

      </Routes>
    </div>
  );
}

export default App;
