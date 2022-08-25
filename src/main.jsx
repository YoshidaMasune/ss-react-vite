import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import Login from './Login'
import Admin from './pages/Admin'
import MiterUpdate from './pages/addmin_page/MiterUpdate'
import AddNewUser from './pages/addmin_page/AddNewUser'
import UserOne from './components/user_All/user_id/UserOne'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> }/>
        <Route path='/user' element={ <UserOne />} />
        <Route path='/login' element={ <Login /> }/>
        <Route path='/admin'>
          <Route path='' element={ <Admin />} />
          <Route path='update' element={ <MiterUpdate /> } />
          <Route path='create' element={ <AddNewUser /> } />
        </Route>
      </Routes>
    </BrowserRouter>

)
