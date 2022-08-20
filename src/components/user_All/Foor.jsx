import React from 'react'
import { Container } from 'react-bootstrap'
import Section from './Section'

function Foor(props) {
   const users = props.users;
  return (
    <Container>
   {
      users.map(user => {
         if (user.foor === 1){
            return(
               <Section users={users.filter(user => user.foor===1)} />
            )
         }
      })
   }   
    </Container>
  )
}

export default Foor