import React, {useState} from 'react'
import { Table } from 'react-bootstrap'
import RoomAdd from './RoomAdd';

function FoorAdd(props) {
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
         <Table borderless>
            <thead>
               <tr>
                  <th>ชั้น {foor}</th>
                  <th className='text-start'>ปัจจุบัน</th>
               </tr>
            </thead>

            <tbody>
            {
               userSort.map(user => {
                  return(
                     <RoomAdd user={user} key={user._id}/>
                  )
               })
            }
            </tbody>
         </Table>
         
      </div>
   </>
  )
}

export default FoorAdd