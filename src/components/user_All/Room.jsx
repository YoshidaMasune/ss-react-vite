import React, { useContext, useEffect, useState } from 'react'
import { MonthContext } from '../../pages/Home';

function Room(props) {
  const {user} = props
  const {month, setMonth} = useContext(MonthContext)
  const lastMonth = user.miter.filter(miter => {
    if (new Date(miter.date).getMonth() === month){
      return miter
    }
  }).sort((a, b) => b.miter - a.miter)
    return (
      <>
        <tr>
          <td><strong>ห้อง</strong> {user.room}</td>
          <td className='text-start'>{user.user.first_name}</td>
          <td>
              {
                lastMonth.length <= 1?  0:
                user.user.internet ? (lastMonth[0].miter - lastMonth[1].miter) *6+ (20) + 110:
                (lastMonth[0].miter - lastMonth[1].miter) *6+ (20)
              }
          </td>
        </tr>
      </>
    )
}

export default Room