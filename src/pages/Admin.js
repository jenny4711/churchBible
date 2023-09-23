import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { readingActions } from "../action/ReadingAction";
import { qtActions } from "../action/QtAction";
import AdminCard from "../component/AdminCard";
import AdminCardQt from "../component/AdminCardQt";
import "../CSS/Admin.css";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openR, setOpenR] = useState(true);
  const [openQ, setOpenQ] = useState(true);
  const [season,setSeason]=useState("")
const [put,setPut]=useState(false)
  const [saveItems, setSaveItems] = useState(null);
  const [saveQt, setSaveQt] = useState(null);
  const { adminAll } = useSelector((state) => state.reading);
  const { adminQt } = useSelector((state) => state.qt);
  const [adminR,setAdminR]=useState(null)
  const [adminQ,setAdminQ]=useState(null)
  const choiceSS=['11기','12기','13기','14기','15기','16기','17기','18기']

function handleChange(evt){
  evt.preventDefault()
  setSeason(evt.target.value)
 
}

function handleSubmit(evt){
  evt.preventDefault()
  const takeSeasonR = adminAll && adminAll?.filter((ss,idx)=>ss.userId.season === season)
  const takeSeasonQ = adminQt && adminQt?.filter((ss,idx)=>ss.userId.season === season)
 
  if(season){
setAdminQ(takeSeasonQ)    
setAdminR(takeSeasonR)
  }else{
    setAdminQ(adminQt)
    setAdminR(adminAll)
  }
 

}

  // 중복없애기
  const uniqueNames = [
    ...new Set(adminR && adminR?.map((item) => item.userId.name)),
  ];
  const uniqueDate = [...new Set(adminQ && adminQ?.map((item) => item.date))];

  // 제자도
  function findByName(name) {
    let result =
      adminR && adminR?.filter((item) => item.userId.name === name);
     
    return setSaveItems(result);
  }

 
 
  // qt
  function findByDate(date) {
    let result = adminQ && adminQ?.filter((item) => item.date === date);

    return setSaveQt(result);
  }

  useEffect(() => {
    dispatch(readingActions.adminShowAll());

  }, [dispatch]);

  useEffect(() => {
    dispatch(qtActions.adminShowQt());
  }, [dispatch]);

  return (
    <div>
       <form className='Admin-form' onSubmit={handleSubmit} >
        <select onChange={handleChange} value={season}>
        {
          choiceSS.map((s,index)=><option key={index} value={s}>{s}</option>)
        }
       
        </select>
        <button>선택</button>
      </form>
      <br/>
      <br/>
      <h2 onClick={() => setOpenR(!openR)} className="title">
        제자도 읽기
      </h2>
     
      <br/>
      <div>
        {uniqueNames &&
          uniqueNames?.map((item) => (
            <h3  onClick={() => findByName(item)}>{item}</h3>
          ))}
        <div className={!openR ? "none" : ""}>
          {saveItems && saveItems?.map((item) => <AdminCard item={item} />)}
        </div>
      </div>

      <br />
      <h2 onClick={() => setOpenQ(!openQ)} className="title">
        큐티
      </h2>
      <div>
        {uniqueDate &&
          uniqueDate?.map((item) => (
            <h3 onClick={() => findByDate(item)}>{item}</h3>
          ))}
        <div className={!openQ ? "none" : ""}>
          {saveQt && saveQt?.map((item) => <AdminCardQt item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Admin;
