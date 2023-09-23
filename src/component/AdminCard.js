import React from 'react'
import Table from 'react-bootstrap/Table';
import '../CSS/AdminCard.css'
const AdminCard = ({item}) => {
  console.log(item,'!!!!!!!')
  return (
    <div className='AdminCard'>
      <h2>{item.userId.name}</h2>
      <Table className='MyAdmin-tbody' key={item._id} responsive>
           
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
          
          
       
         </Table>
      
    </div>
  )
}

export default AdminCard