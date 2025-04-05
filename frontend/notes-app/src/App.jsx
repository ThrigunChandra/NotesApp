  import React from 'react'
  import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
  import Home from './pages/Home/Home'
  import Login from './pages/Login/Login'
  import SignUp from './pages/SignUp/SignUp'


  const App = function() {
    return (
      <Router>
        <Routes>
          <Route path="/dashboard"  element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router> 
    )
  }

  export default App