import React from "react";
import { Route, Routes } from "react-router";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PrivateRoute from './Route/PrivateRoute';
import Qttime from './pages/Qttime';
import './CSS/App.css'
function App() {
  return (
    <div className='App'>
    <h1>제자의 삶</h1>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      
      <Route element={<PrivateRoute permissionLevel="admin"/>}>
     
      </Route>
      <Route element={<PrivateRoute permissionLevel="normal"/>}>
      <Route path='/qt' element={<Qttime/>}/>


      </Route>

    </Routes>
    </div>
  );
}

export default App;
