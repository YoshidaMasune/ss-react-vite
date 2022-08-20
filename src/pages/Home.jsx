import React, { useState, useEffect } from 'react';
import Foor from '../components/user_All/Foor';
import { Form, Col, Row, Container } from 'react-bootstrap'
import Section from '../components/user_All/Section';

function home() {
  const [ users, setUsers ] = useState([])
  const [section, setSection] = useState(1)
  useEffect( () => {
    fetch('http://localhost:1234/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  console.log(section);

  if (users) console.log(users)
  const S1 = users.filter(u => u.section === 1)
  const S2 = users.filter(u => u.section === 2)
  return (
    <Container>
      <Form.Group className='float-end mt-2' style={{width: "130px"}}>
        <Form.Label>ชั้น</Form.Label>
        <Form.Select onChange={(e) => setSection(Number(e.target.value))} name="section" id="section" size='sm' value={section}>
          <option value={1}>1</option>
          <option value={2}>2</option>
        </Form.Select>
      </Form.Group>


      <div className="container">
        {
          section === 1 ?

          <Section users={S1}/> :
          <Section users={S2} />
        }
      </div>
    </Container>
  )
}

export default home