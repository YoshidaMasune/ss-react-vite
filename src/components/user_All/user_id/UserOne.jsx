import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CalMiter } from '../Room'

import NavBar from '../../NavBar'

function UserOne() {
   const param = useLocation()
   const _id = param.search.split('=')[1]
   const [user, setUser] = useState()
   const [month, setMonth] = useState(new Date().getMonth())
   const [lm, setLm] = useState([])
   const [bm, setBm] = useState([])
   const [price, setPrice] = useState(0)
   useEffect( () => {
      fetch(`http://localhost:1234/user/${_id}`)
      .then(res => res.json())
      .then(date => setUser(date))
   }, [])

   useEffect( () => {
      if(user){
         setBm(user.miter.filter(miter => (new Date(miter.date).getMonth() === month-1)).reverse())
         setLm(user.miter.filter(miter => (new Date(miter.date).getMonth() === month)).reverse())
         setPrice(CalMiter(lm, bm)) 
      }   
   }, [user])

   console.log(price);
  return (
    <>
      <NavBar />
   {
      !user ? <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>:

      <div className="container">
         <div className='d-flex gap-4 mt-4 '>
            <span><strong>ชื่อ </strong> 
               {user.user.first_name}
            </span>
            <span><strong>สกุล </strong> 
               {user.user.last_name}
            </span>
            <span><strong>ฉายา </strong> 
               {user.user.jaya}
            </span>
            <span>
               <input type="number" value={price} readOnly />
            </span>
         </div>
      </div>
   }
      
    </>
  )
}

export default UserOne