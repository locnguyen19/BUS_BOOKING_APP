import React, { useEffect } from 'react'
import 'antd/dist/reset.css';
import "./resourses/global.css";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import AdminHome from './pages/Admin/Profile'
import AdminBuses from './pages/Admin/AdminBuses'
import BookNow from './pages/BookNow'
import AdminUsers from './pages/Admin/AdminUsers';
import Profile from './pages/Admin/Profile'
import Bookings from './pages/Bookings'
import AdminBookings from './pages/Admin/AdminBookings'


function App() {

  return (


    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Routes>
        <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <AdminUsers />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Routes>
        <Route
            path="/admin/bookings"
            element={
              <ProtectedRoute>
                <AdminBookings />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Routes>
        <Route
            path="/admin/buses"
            element={
              <ProtectedRoute>
                <AdminBuses />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Routes>
        <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Routes>
        <Route
            path="/book-now/:id"
            element={
              <ProtectedRoute>
                <BookNow />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Routes>
        <Route
            path="/bookings"
            element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

export function PublicRoute({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }
  }, [])

  return (
    <div>
      {children}
    </div>
  )
}