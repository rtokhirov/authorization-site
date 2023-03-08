import React from 'react';
import { Link,Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './home/Home'
import Login from './login/Login'
import Signup from './signup/Signup'
import Navbar from './components/Navbar';
import NotFoundPage from './notFoundPage/notFoundPage';
import {Protected,ProtectedOne} from './components/Protected';


function App() {
  
  const {onAuthChange,user}=useAuthContext()

  return (
    <div className="App font-myFont">
      {onAuthChange &&
        <Router>
          <Navbar/>
            <div className='max-w-5xl mx-auto py-3 px-3'>
              <Routes>
                <Route path='/' element={
                  <Protected isSignedIn={user}>
                      <Home/>
                  </Protected>
                }/>
                <Route path='/home' element={
                  <Protected isSignedIn={user}>
                      <Home/>
                  </Protected>
                }/>
                <Route path='/login' element={
                  <ProtectedOne isSignedIn={user}>
                      <Login/>
                  </ProtectedOne>
                }/>
                <Route path='/signup' element={
                  <ProtectedOne isSignedIn={user}>
                      <Signup/>
                  </ProtectedOne>
                }/>
                <Route path='*' element={<NotFoundPage/>}/>
              </Routes>
            </div>
        </Router>
      }
    </div>
  )
}

export default App
