import React, {useEffect} from 'react'
import NavBar from '../../components/NavBar'

function MiterUpdate() {

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
  
  return (
    <>
      <NavBar />
      <div className="container">
        <h2>จดค่าไฟ</h2>
      </div>
    </>
  )
}

export default MiterUpdate