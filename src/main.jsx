import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import Login from './Login'
import Addmin from './pages/Addmin'
import MiterUpdate from './pages/addmin_page/MiterUpdate'
import AddNewUser from './pages/addmin_page/AddNewUser'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/addmin'>
          <Route path='' element={ <Addmin />} />
          <Route path='update' element={ <MiterUpdate /> } />
          <Route path='create' element={ <AddNewUser /> } />
        </Route>
      </Routes>
    </BrowserRouter>

)
