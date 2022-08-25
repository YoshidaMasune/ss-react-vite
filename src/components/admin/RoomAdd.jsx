import React, { useEffect, useState } from 'react'

function RoomAdd(props) {
   const {user} = props
   const [miter, setMiter] = useState()
   const [lm, setLm] = useState(0)
   const senData = async (e) => {
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
      setMiter(null)
   }

   useEffect( () => {
      setLm(user.miter.filter(miter => (new Date(miter.date).getMonth(miter.date) === new Date().getMonth())).reverse())
   }, [])

  return (
   <>
   <tr>
      <td>ห้อง{user.room}</td>
      <td>
         <input id='miter' className='form-control form-control-sm' onChange={(e) => setMiter(Number(e.target.value))} placeholder={ lm? lm[0].miter: 0} type='number' />
      </td>
      <td>
         <button onClick={senData} className='btn btn-primary btn-sm'>ตกลง</button>
      </td>
   </tr>
   </>

  )
}

export default RoomAdd