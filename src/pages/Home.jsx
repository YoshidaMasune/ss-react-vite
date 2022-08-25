import React, { useState, useEffect, createContext } from 'react';
import Foor from '../components/user_All/Foor';
import { Form, Col, Row, Container } from 'react-bootstrap'
import Section from '../components/user_All/Section';

const MonthContext = createContext();

function home() {
  const [ users, setUsers ] = useState([])
  const [section, setSection] = useState(1)
  const [month, setMonth] = useState(new Date().getMonth())
  const months_th = [ "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม", ]
  useEffect( () => {
    fetch('http://localhost:1234')
      .then(res => res.json()) 
      .then(data => setUsers(data))
  }, [])
  if (month === undefined) {
    setMonth(new Date().getMonth())
  }
  const S1 = users.filter(u => u.section === 1)
  const S2 = users.filter(u => u.section === 2)
  return (
    <Container>
      <Row>
        <Form.Group as={Col} className='float-end mt-2 text-center' style={{width: "130px"}}>
          <Form.Label>สุวรรณเสน</Form.Label>
          <Form.Select onChange={(e) => setSection(Number(e.target.value))} name="section" id="section" size='sm' value={section}>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className='float-end mt-2 text-center' style={{width: "130px"}}>
          <Form.Label>เดือน</Form.Label>
          <Form.Select size='sm' onChange={(e) => setMonth(Number(e.target.value))} value={month} name='month'>
            {
              months_th.map((month, index) => {
                return(
                  <option key={index} value={index}>{month}</option>
                )
              })
            }
          </Form.Select>
        </Form.Group>
      </Row>
      
      <div className="container-sm">
        <MonthContext.Provider value={{month, setMonth}}>
        {
            section === 1 ?
              
            <Section users={S1}/> :
            <Section users={S2} />
          }
        </MonthContext.Provider>
      </div>
    </Container>
    
  )
}

export { MonthContext };
export default home;