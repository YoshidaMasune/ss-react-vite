import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom'

function AddNewUser() {

  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [jaya, setJaya] = useState('')
  const [internet, setInternet] = useState(false);
  const [section, setSection] = useState(1)
  const [foor, setFoor] = useState(1)
  const [room, setRoom] = useState(1)
  const [miter, setMiter] = useState(0)

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
    })
  }, []);

  const inp_effect = () => {
    setFirst_name('')
    setLast_name('')
    setJaya('')
    setInternet(false)
    setRoom((e) => e+=1)
    setMiter(0)
  }

  const form_handle =  async (e) => {
    e.preventDefault();

    const inp = e.target;
    const jsonData = {
      first_name: first_name,
      last_name: last_name,
      jaya: jaya,
      internet: internet,
      section: section,
      foor: foor,
      room: room,
      miter: miter
    }
    await fetch('http://localhost:1234/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData)
    }).then(res => res.json())
      .then((res) => {
        if (res.status === 'ok'){
          alert('create 1 user')
        }else if (res.status === 'miter invalided'){
          alert('miter invalided')
        }else if (res.status === 'no address'){
          alert('no address')
        }else{
          alert('has 1 user')
        }
      })
    inp_effect();

    e.target.miter.value = null
  }
  return (
    <>
      <NavBar />
      <div className="container-sm mt-3">
        <Link className='btn btn-primary btn-sm mb-2' to='/admin'>ย้อนกลับ</Link>
        <Form onSubmit={form_handle}>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>ชื่อ</Form.Label>
              <Form.Control onChange={(e) => setFirst_name(e.target.value)} type='text' name='first_name' value={first_name} autoComplete="off" required/>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>สกุล</Form.Label>
              <Form.Control onChange={(e) => setLast_name(e.target.value)} type='text' name='last_name' value={last_name} autoComplete="off" required/>
            </Form.Group>
          </Row>
         
         <Row>
          <Form.Group as={Col} md='4'>
              <Form.Label>ฉายา</Form.Label>
              <Form.Control onChange={(e) => setJaya(e.target.value)} type='text' value={jaya} name='jaya' autoComplete='off' />
            </Form.Group>
            <Form.Group as={Col} md='3'>
              <Form.Label>internet</Form.Label>
              <Form.Select onChange={(e) => setInternet(e.target.value)} name='internet' value={internet} required>
                <option value={true}>ใช้</option>
                <option value={false}>ไม่</option>
              </Form.Select>
            </Form.Group>
         </Row>

        <Form.Group className='mt-4'>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>สุวรรณเสน</Form.Label>
              <Form.Select onChange={(e) => setSection(Number(e.target.value))} name='foor' required value={section}>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>ชั้น</Form.Label>
              <Form.Select onChange={(e) => setFoor(Number(e.target.value))} name='section' required value={foor}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>ห้อง</Form.Label>
              <Form.Select onChange={(e) => setRoom(Number(e.target.value))} name='room' required value={room}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group style={{width: "200px"}}>
              <Form.Label>miter</Form.Label>
              <Form.Control onChange={(e) => setMiter(Number(e.target.value))} type='number' name='miter' required/>
            </Form.Group>
            <Form.Group>
              <button type='submit' className='btn btn-success float-end'>add</button>
            </Form.Group>
          </Row>
        </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default AddNewUser