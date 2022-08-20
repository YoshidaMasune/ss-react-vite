import React from 'react'

import { ListGroup, Table } from 'react-bootstrap'
import Foor from './Foor'
import Room from './Room'

function Section(props) {
   const { users } = props
   const F1 = users.filter( u => u.foor === 1)
   const F2 = users.filter( u => u.foor === 2)
   const F3 = users.filter( u => u.foor === 3)
  return (
   <>
      <Foor users={F1} />
      <Foor users={F2} />
      <Foor users={F3} />
   </>
  )
}

export default Section