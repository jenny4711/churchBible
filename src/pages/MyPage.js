import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { qtActions } from '../action/QtAction';
import { readingActions } from '../action/ReadingAction';
import Table from 'react-bootstrap/Table';
import '../CSS/Mypage.css';

const MyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { qt } = useSelector(state => state.qt);
  const {reading}=useSelector(state =>state.reading);
  const [openQ,setOpenQ]=useState(true);
  const [openR,setOpenR]=useState(true);
  
  function deletedQt (id){
    console.log(id)
    dispatch(qtActions.deleteQt(id))
  }
  function deletedRd (id){
    console.log(id)
    dispatch(readingActions.deletedReading(id))
  }


  useEffect(()=>{
    dispatch(readingActions.getReading())
  },[dispatch])

  useEffect(() => {
    dispatch(qtActions.getQt());
   
  }, [dispatch]);

  return (
    <>
      <h3 onClick={() => setOpenQ(!openQ)}>큐티</h3>
    <div className={openQ?'Mypage':'none'} >
      {qt?.data ? (
        qt.data.map((item) => (
          <Table className='Mypage-tbody' key={item._id} responsive>
           
            <tbody >
              <tr >
                <td className='name' >date</td>
                <td className='content'>{item.date}</td>
              </tr>
              <tr>
                <td className='name'>본문 구절</td>
                <td className='content'>{item.main}</td>
              </tr>
              <tr>
                <td className='name'>본문 내용</td>
                <td className='textArea'>{item.meditContent}</td>
              </tr>
            </tbody>
           
           
            <span className='deleteBtn' onClick={()=>deletedQt(item._id)}>삭제</span>
          </Table>
          
        ))
      ) : (
        <p>작성하신 QT 가 없습니다.</p>
      )}

      
      
    </div>
    <h3 onClick={() => setOpenR(!openR)}>제자도 읽기</h3>
    <div className={openR?'Mypage  reading':'none'} >
      {reading ? (
        reading.map((item) => (
          <Table className='Mypage-tbody' key={item._id} responsive>
           
            <tbody >
              <tr >
                <td className='name' >과제목</td>
                <td className='content'>{item.title}</td>
              </tr>
              <tr>
                <td className='name'>주요내용</td>
                <td className='content'>{item.main}</td>
              </tr>
              <tr>
                <td className='name'>느낀점</td>
                <td className='textArea'>{item.feelingContent}</td>
              </tr>
            </tbody>
           
           
            <span onClick={()=>deletedRd(item._id)}>삭제</span>
          </Table>
          
        ))
      ) : (
        <p>작성하신 QT 가 없습니다.</p>
      )}

     
      
    </div>
    </>
  );
};

export default MyPage;
