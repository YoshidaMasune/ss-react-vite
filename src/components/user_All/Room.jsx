import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MonthContext } from '../../pages/Home';

const CalMiter = (lm, bm) => {
  if (lm.length > 1){
    return (lm[0].miter - lm[1].miter) * 6
  }else if (lm.length === 1 && bm.length > 0){
    return lm[0].miter  - bm[0].miter
  }else{
    return 0
  }
}

function Room(props) {
  const {user} = props
  const {month, setMonth} = useContext(MonthContext)
  const [lm, setLm] = useState([])
  const [bm, setBm] = useState([])
  const [price, setPrice] = useState(3)
  const navto = useNavigate();
  
  // DEBUGGING 

  console.log(bm);
  console.log(lm)
  console.log(month)
  // end DEBUGGING

  useEffect(() => {
    if (month == 0){
      console.log('rte');
      setBm(user.miter.filter(miter => (new Date(miter.date).getMonth() === 11)).reverse())
    }else{
      setBm(user.miter.filter(miter => (new Date(miter.date).getMonth() === (month - 1))).reverse())
    }
    setLm(user.miter.filter(miter => (new Date(miter.date).getMonth() === month)).reverse())
  }, [month])
  const toUser = () => {
    navto({
      pathname: '/user',
      search: `_id=${user._id}`
    })
  }       
  useEffect(() => {
    setPrice(CalMiter(lm, bm))
  }, [month, lm, bm])
  
  return (
    <>
      <tr>
        <td><strong>ห้อง</strong> {user.room}</td>
        <td className='text-start'>{user.user.first_name}</td>
        <td>
          {
            price <= 0? 0:
            price + 20
          }
        </td>
        <td>
          { lm.length > 0 ? lm[0].miter: 0 }
        </td>
      </tr>
    </>
    )
}

export { CalMiter }
export default Room