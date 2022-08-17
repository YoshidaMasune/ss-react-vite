import React, { useState, useEffect } from 'react';

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
      <div className="container">
        {
          users.map(user => {

            return(
              <div className="card" key={user._id}>
                <h3>{user.user.first_name}</h3>
              </div>
            )
      
          })
        }
     
      </div>
    </>
  )
}

export default home