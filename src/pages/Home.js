import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import '../CSS/Home.css'


const Home = () => {
  const navigate= useNavigate()
  const {user} =useSelector(state=>state.user)
  console.log(user?.level)
  const isNormal = user?.level === "normal" || user?.level === "admin";

  return (
    <div className='Home'>
     
      <div className='Home_box'>
        {isNormal?
        (
          <>
        <Link to='/qt'>QtTime</Link>
        <Link to='/mypage'>Mypage</Link>
        </>
        ):(
          <>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        </>
        )}
      </div>
    </div>
  )
}

export default Home