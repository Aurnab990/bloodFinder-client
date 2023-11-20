import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Home/Navbar/Navbar';
import Footer from './Layout/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Register/Login/Login';
import Signup from './Components/Register/Sign-up/Signup';
import Bloodfinder from './Components/BloodFinder/Bloodfinder';
import Addinfo from './Components/AddInfo/Addinfo';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route  path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/bloodfinder' element={<Bloodfinder></Bloodfinder>}></Route>
        <Route path='/addinfo' element={<Addinfo></Addinfo>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
