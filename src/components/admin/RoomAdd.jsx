import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

function RoomAdd(props) {
   const {user} = props
   const [miter, setMiter] = useState(0)

  return (
   <>
   <tr>
      <td>ห้อง{user.room}</td>
      <td className='p-1'>
         <form>
            <input  className='form-control form-control-sm' onChange={(e) => setMiter(Number(e.target.value))} type='number' />
         </form>  
      </td>
      <td>
         <button className='btn btn-primary btn-sm'>ตกลง</button>
      </td>
   </tr>
   </>

  )
}

export default RoomAdd