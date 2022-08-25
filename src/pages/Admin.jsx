import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Link, Route, Routes } from 'react-router-dom'
import AddNewUser from './addmin_page/AddNewUser'
import MiterUpdate from './addmin_page/MiterUpdate'

function Admin() {

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
  }, [])

  const Logout = (e) => {
    localStorage.removeItem('token')
    window.location = '/login'
  }

  return (
    <>
      <NavBar />
      <div className="container">
          <ul className="list-group">
            <li className='list-group-item'>
              <Link to='create'>เพิ่มสมาชิก</Link>
            </li>
            <li className='list-group-item'>
              <Link to='update'>ไฟฟ้า</Link>
            </li>
          </ul>

          <button onClick={Logout} className='btn btn-danger'>
            Logout
          </button>
      </div>
      </>
  )
}

export default Admin