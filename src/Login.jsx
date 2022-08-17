import React from 'react'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'

function Login() {

  return (
    <div>
      <NavBar />

      <div className="container-lg">
         <LoginForm />
      </div>
    </div>
  )
}

export default Login