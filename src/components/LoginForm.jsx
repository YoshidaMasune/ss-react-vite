import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {

   const handleSubmit = (e) => {
      e.preventDefault();
      const userInp = e.currentTarget
      const jsonData = {
         username: userInp.username.value,
         password: userInp.password.value
      }

      fetch('http://localhost:1234/login', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(jsonData)
      })
      .then(res => res.json())
      .then(data => {
         if (data.status === 'login'){  
            alert('login success')
            localStorage.setItem('token', data.token)
            window.location = '/addmin'
          
         }else{
            alert('login faild')
         }
      })
      .catch(err => {
         console.log(err)
      })
   }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>username</Form.Label>
        <Form.Control type="text" placeholder="username" name="username" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;