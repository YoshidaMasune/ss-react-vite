import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import Room from './Room';
import Section from './Section'

function Foor(props) {
   const users = props.users;
   const userSort = users.sort((a, b) => a.room - b.room)

   const [foor, setFoor] = useState(1)
   users.map( u=> {
      if (u.foor !== foor){
         setFoor(u.foor)
      }else{
         return 
      }
   })
  
   return (
      <>
         <div className="container ">
            <Table>
               <thead>
                  <tr>
                     <th>ชั้น {foor}</th>
                     <th></th>
                     <th>จ่าย</th>
                  </tr>
               </thead>

               <tbody>
               {
                  userSort.map(user => {
                     return(
                        <Room user={user} key={user._id}/>
                     )
                  })
               }
               </tbody>
            </Table>
            
         </div>
      </>
  )
}

export default Foor