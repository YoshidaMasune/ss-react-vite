import React from 'react'

import { ListGroup } from 'react-bootstrap'
import Room from './Room'

function Section(props) {
   console.log(props.users);
  return (
   <>
      <ListGroup>
         <Room />
      </ListGroup>
   </>
  )
}

export default Section