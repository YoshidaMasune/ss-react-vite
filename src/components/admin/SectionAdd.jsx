import React from 'react'
import FoorAdd from './FoorAdd'

function SectionAdd(props) {
   const { users } = props
   const F1 = users.filter( u => u.foor === 1)
   const F2 = users.filter( u => u.foor === 2)
   const F3 = users.filter( u => u.foor === 3)
  return (
   <>
      <FoorAdd users={F1} />
      <FoorAdd users={F2} />
      <FoorAdd users={F3} />
   </>
  )
}

export default SectionAdd