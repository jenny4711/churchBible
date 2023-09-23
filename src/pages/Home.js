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
        <Link to='/qt'>생명의삶</Link>
        <Link to='/reading'>제자도</Link>
        <Link to='/mypage'>나의페이지</Link>
        </>
        ):(
          <>
        <Link to='/login'>로그인</Link>
        <Link to='/register'>가입</Link>
        </>
        )}
      </div>
    </div>
  )
}

export default Home