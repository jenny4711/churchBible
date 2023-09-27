import React,{useEffect} from "react";
import { Route, Routes } from "react-router";
import { Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PrivateRoute from './Route/PrivateRoute';
import Qttime from './pages/Qttime';
import './CSS/App.css'
import MyPage from './pages/MyPage';
import { useDispatch, useSelector } from "react-redux";
import { userActions } from './action/userAction';
import { useNavigate } from "react-router";
import Reading from './pages/Reading';
import Admin from './pages/Admin';
import AdminRegister from './pages/AdminRegister';


function App() {
  const {user} = useSelector(state=>state.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()

useEffect(()=>{
navigate('/')
},[])

  function logout(){
dispatch(userActions.logout())
  }



  return (
    <div className='App'>
      
  
      <div className='App-link'>
       
        {user && user.level === "normal" ?(
          <>
        <Link to='/mypage'>나의 페이지</Link>
        <Link to='/qt'>생명의 삶(QT)</Link>
        <Link to='/reading'>제자도</Link>
        <Link onClick={logout}>로그아웃</Link>
        </>
        ):
        ( 
       ""
        )}

{user && user.level === "admin" ?(
          <>
        <Link to='/mypage'>나의 페이지</Link>
        <Link to='/qt'>큐티</Link>
        <Link to='/reading'>읽기</Link>
        <Link to='/admin'>관리자</Link>
        <Link onClick={logout}>로그아웃</Link>
        <Link to='/adminRegister'>관리자가입</Link>
       
        </>
        ):
        ( 
       ""
        )}
        
        
      </div>
     
    <h1>제자의 삶</h1>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/adminRegister'element={<AdminRegister/>}/>
      
      <Route element={<PrivateRoute permissionLevel="admin"/>}>
      <Route path='/admin' element={<Admin/>}/>
      </Route>
      <Route element={<PrivateRoute permissionLevel="normal"/>}>
      <Route path='/qt' element={<Qttime/>}/>
      <Route path='/reading' element={<Reading/>}/>
      <Route path='/mypage' element={<MyPage/>}/>


      </Route>

    </Routes>
    </div>
  );
}

export default App;
