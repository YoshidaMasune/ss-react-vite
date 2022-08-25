import React, {useEffect, useState} from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SectionAdd from '../../components/admin/SectionAdd'
import NavBar from '../../components/NavBar'


function MiterUpdate() {
  const [users, setUsers] = useState([])
  const [section, setSection] = useState(1)
  useEffect( () => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:1234/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token,
      },
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'ok'){
      }else{
        alert('your are not login')
        localStorage.removeItem('token')
        window.location = '/login'
      }
    }),

    fetch('http://localhost:1234/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  const S1 = users.filter(u => u.section === 1)
  const S2 = users.filter(u => u.section === 2)
  
  return (
    <>
      <NavBar />
      
      <div className="container mt-4">
        <Row>
        <Form.Group as={Col}>
            <Form.Label className="btn btn-primary btn-sm" as={Link} to='/admin'>admin</Form.Label>
          </Form.Group>
          <Form.Group as={Col} className='float-end text-center' style={{width: "130px"}}>
            <Form.Label>สุวรรณเสน</Form.Label>
            <Form.Select onChange={(e) => setSection(Number(e.target.value))} name="section" id="section" size='sm' value={section}>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </Form.Select>
          </Form.Group>
        </Row>
             
        { section === 1 ? <SectionAdd users={S1} />: <SectionAdd users={S2} />}
      </div>
    </>
  )
}

export default MiterUpdate