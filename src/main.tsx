import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './index.css'
import Signin from './pages/Signin.tsx'
import Login from './pages/Login.tsx'
import Contact from './pages/Contact.tsx'
import Activities from './pages/Activities.tsx'
import DashboardLayout from './pages/DashboraLayouts.tsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Users from './components/dashbord/Users.tsx'
import Help from './components/dashbord/Help.tsx'
// import MainContent from './components/MainCotent.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/dashboard/*" element={<DashboardLayout />}> {/* Update the path */}
          {/* Define child routes */}
          {/* <Route path="/dashboard" element={<MainContent />} /> */}
          <Route path="users" element={<Users />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
