import React, { useState } from 'react'

function RoomAdd(props) {
   const {user} = props
   const [miter, setMiter] = useState()

   const senData = async () => {
      const data = {
         _id: user._id,
         miter: miter
      }
      await fetch('http://localhost:1234/update/miter', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data)
      })
      
      document.getElementById('miter').value = null
   }

  return (
   <>
   <tr>
      <td>ห้อง{user.room}</td>
      <td>
         <input id='miter' className='form-control form-control-sm' onChange={(e) => setMiter(Number(e.target.value))}  type='number' />
      </td>
      <td>
         <button onClick={senData} className='btn btn-primary btn-sm'>ตกลง</button>
      </td>
   </tr>
   </>

  )
}

export default RoomAdd