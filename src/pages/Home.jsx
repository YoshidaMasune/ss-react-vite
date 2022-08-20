import React, { useState, useEffect } from 'react';
import Foor from '../components/user_All/Foor';

function home() {
  const [ users, setUsers ] = useState([])
  useEffect( () => {
    fetch('http://localhost:1234/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  if (users) console.log(users)
  return (
    <>
      <div className="container-sm">
        <Foor users={users} />
      </div>
    </>
  )
}

export default home